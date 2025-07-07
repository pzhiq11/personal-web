export const blocks = [
  {
    block: "stage-head-start",
    content: `
      <script>
        performance && typeof performance.mark === 'function' && performance.mark('stage-head-start');
      </script>
    `,
  },
  {
    block: "stage-head-end",
    content: `
      <script>
        performance && typeof performance.mark === 'function' && performance.mark('stage-head-end');
      </script>
    `,
  },
  {
    block: "stage-body-start",
    content: `
      <script>
        performance && typeof performance.mark === 'function' && performance.mark('stage-body-start');
      </script>
      <script>
        (function () {
          const scale = Math.min(0.58, document.documentElement.clientWidth / 750);
          const fontSize = 48 * scale;
          const isPadMod = window.innerWidth / window.innerHeight >= 0.62 && window.innerWidth > 500;
          window.__isPadMod = isPadMod;
          //window.__rootFontSize = fontSize;
          //document.documentElement.style.fontSize = \`\${fontSize}px\`;
          if (document.body.classList) {
            document.body.classList[isPadMod ? 'add' : 'remove']('hd-pad-mod');
          }
        })();
      </script>
    `,
  },
  {
    block: "stage-body-end",
    content: `
      <script>
        performance && typeof performance.mark === 'function' && performance.mark('stage-body-end');
      </script>
    `,
  },
];
