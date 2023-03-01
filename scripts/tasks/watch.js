import chokidar from 'chokidar';
import fs from "fs-extra";
import glob from "glob";
import browserSync from "browser-sync";
import {config} from '../../config.js';
import {renameDest} from './util.js';
import {copyFile} from "./copy-file.js";
const log = console.log.bind(console);

export const watch = () => {
  browserSync.init({
    server: {baseDir: '_site/'},
    open: false
  })
  const copyconfig = config.paths.watch[0];
  log(copyconfig.glob)
  chokidar.watch(copyconfig.src, {
    persistent: true,
    ignoreInitial: true
  }).on('all', async (event, file) => {
    browserSync.reload()
  });
}

watch();
