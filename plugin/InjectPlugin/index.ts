import { blocks } from "./InjectBlocks";
import type { Plugin } from 'vite';

export default function InjectPlugin(): Plugin {
  return {
    name: "inject-plugin",
    transformIndexHtml(html: string) {
      let result = html;
      for (const block of blocks) {
        switch (block.block) {
          case "stage-head-start":
            result = result.replace(
              /<head>/i,
              `<head>\n${block.content.trim()}`
            );
            break;
          case "stage-head-end":
            result = result.replace(
              /<\/head>/i,
              `${block.content.trim()}\n</head>`
            );
            break;
          case "stage-body-start":
            result = result.replace(
              /<body.*?>/i,
              (match: string) => `${match}\n${block.content.trim()}`
            );
            break;
          case "stage-body-end":
            result = result.replace(
              /<\/body>/i,
              `${block.content.trim()}\n</body>`
            );
            break;
        }
      }
      return result;
    },
  };
}