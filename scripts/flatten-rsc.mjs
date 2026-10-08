// Next 16's static export writes route-segment prefetch payloads as nested folders
// (e.g. about/__next.about/__PAGE__.txt) while the client router requests the flat
// name (about/__next.about.__PAGE__.txt). Add flat copies so prefetching works on any static host.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
let count = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name.startsWith("__next.")) flatten(full, dir);
      else walk(full);
    }
  }
}

function flatten(segDir, parent) {
  const files = [];
  const collect = (d) => {
    for (const n of readdirSync(d)) {
      const f = join(d, n);
      statSync(f).isDirectory() ? collect(f) : files.push(f);
    }
  };
  collect(segDir);
  for (const f of files) {
    const flat = join(parent, relative(parent, f).split(sep).join("."));
    if (!existsSync(flat)) {
      copyFileSync(f, flat);
      count++;
    }
  }
}

if (existsSync(OUT)) {
  walk(OUT);
  console.log(`flatten-rsc: added ${count} flat prefetch file(s)`);
}
