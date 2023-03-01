import {createRequire} from "module";

const require = createRequire(import.meta.url);
export const pjson = require('./package.json');

export const config = {
  paths: {
    copy: [
      {
        src: 'src/structure/',
        glob: 'src/structure/**/**',
        dest: 'dist/',
      }
    ],
    watch: [
      {
        src: '_site/',
        glob: '_site/**/*.*'
      }
    ],
  }
};
