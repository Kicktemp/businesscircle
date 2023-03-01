import fs from 'fs-extra';
import {dirname} from 'path';

export const copyFile = async (src, dest) => {
  fs.promises.readFile(src, 'utf8')
    .then((data) => {
      fs.promises.mkdir(dirname(dest), {recursive: true})
        .then(
          x => fs.promises.writeFile(dest, data, 'utf8')
            .catch((err) => {
              return console.log(err);
            })
        )
    })
}
