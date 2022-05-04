/*!
 * qrust_bridge
 * Copyright (c) 2022 Parthka <parthka.2005@gmail.com>
 * Copyright (c) 2022 Slect Team
 * MIT Licensed
 */

import { basename, dirname } from "https://deno.land/std@0.136.0/path/mod.ts";
import { existsSync } from "https://deno.land/std@0.136.0/fs/mod.ts";

export default class {
  private qr_data: string;
  private fgc: string = "000";
  private bgc: string = "fff";
  private qrs: number = 256;

  constructor(
    data: string,
    size?: number,
    fg?: string,
    bg?: string,
  ) {
    // set size
    if (size) {
      if (size < 128 || size > 8192) {
        console.log("plese give valid size between 128 to 8192");
      } else {
        this.qrs = size;
      }
    }

    // set foreground color
    if (fg) {
      this.fgc = fg;
    }

    // set background color
    if (bg) {
      this.bgc = bg;
    }

    // set data
    this.qr_data = data;
  }

  async save(path: string) {
    // if dir not exiest make dir
    if (!existsSync(dirname(path))) {
      Deno.mkdirSync(dirname(path), { recursive: true });
    }

    // check extraction
    let e: any = basename(path).split(".");
    e = e[e.length - 1];

    // if extraction is not png than append .png
    if (e !== "png") {
      path = path + ".png";
      console.log("save image only png format");
      console.log("force full add .png < " + path + " >");
    }

    // make qr code
    try {
      let p = Deno.run({
        cmd: [
          "qrust",
          this.qr_data,
          String(this.qrs),
          path,
          this.fgc,
          this.bgc,
        ],
        stdout: "piped",
        stderr: "piped",
      });
      p.output();
    } catch (e) {
      console.log("qrust not found");
      console.log("Please install qrust https://github.com/slectgit/qrust");
    }
  }
}
