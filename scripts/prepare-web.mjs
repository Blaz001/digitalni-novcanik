import { cp, mkdir, copyFile } from "node:fs/promises";

await mkdir("www", { recursive: true });
await copyFile("index.html", "www/index.html");
await copyFile("icon.svg", "www/icon.svg");
await copyFile("manifest.json", "www/manifest.json");
await copyFile("sw.js", "www/sw.js");
await cp("android", "www/android", { recursive: true });

// The native app bundles its own files. It does not need the PWA service worker.
console.log("Web files copied to www/");
