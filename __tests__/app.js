'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-libts:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'src/lib/index.ts',
      '.editorconfig',
      'package.json',
      'tsconfig.es5.json',
      'tsconfig.es6.json',
      'tsconfig.umd.json',
      'webpack.config.ts'
    ]);
  });
});
