import packageJson from "../package.json";
import { ManifestType } from "@src/manifest-type";

const manifest: ManifestType = {
  manifest_version: 3,
  minimum_chrome_version: "92",
  name: "영감탱",
  version: packageJson.version,
  description:
    "이젠 영감탱을 웹에서도? 웹 컨텐츠를 빠르게 영감탱에 담아보세요!",
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "icons/34w.png",
    default_title: "영감탱",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/index.js"],
      css: ["assets/css/contentStyle.chunk.css"],
    },
  ],
  icons: {
    "128": "icons/128w.png",
    "512": "icons/512w.png",
  },
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module",
  },
  permissions: ["contextMenus", "storage"],
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "icons/512w.png",
        "icons/128w.png",
        "icons/34w.png",
      ],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
