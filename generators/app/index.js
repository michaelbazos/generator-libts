'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the funky ' + chalk.red('generator-libts') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Library name',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Library description'
    }, {
      type: 'input',
      name: 'author',
      message: 'Your name',
      default: 'Anonymous'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('src/'),
      this.destinationPath('src/')
    );

    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('tsconfig.es5.json'),
      this.destinationPath('tsconfig.es5.json')
    );

    this.fs.copy(
      this.templatePath('tsconfig.es6.json'),
      this.destinationPath('tsconfig.es6.json')
    );

    this.fs.copy(
      this.templatePath('tsconfig.umd.json'),
      this.destinationPath('tsconfig.umd.json')
    );

    this.fs.copyTpl(
      this.templatePath('package.json.tpl'),
      this.destinationPath('package.json'),
      {
        author: this.props.author,
        description: this.props.description,
        name: this.props.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('webpack.config.ts.tpl'),
      this.destinationPath('webpack.config.ts'),
      {
        name: this.props.name
      }
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
};
