import { join } from 'path';

import { Configuration, optimize } from 'webpack';


export default (): Configuration => (
  {
    entry: {
      '<%= name %>.umd': './src/lib/index.ts',
      '<%= name %>.umd.min': './src/lib/index.ts'
    },
    output: {
      path: join(__dirname, './dist'),
      filename: 'bundles/[name].js',
      libraryTarget: 'umd',
      library: '<%= name %>'
    },
    devtool: 'source-map',
    externals: [],
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader', options: { configFileName: 'tsconfig.umd.json' } }
      ]
    },
    plugins: [
      new optimize.UglifyJsPlugin({
        sourceMap: true,
        include: /\.min\.js/
      })
    ],
  }
);
