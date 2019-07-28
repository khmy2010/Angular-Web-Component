const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/web-component/polyfills-es2015.js',
    './dist/web-component/main-es2015.js',
    './dist/web-component/runtime-es2015.js',
    './dist/web-component/scripts.js',
  ];

  await fs.ensureDir('elements');

  try {
    await concat(files, 'elements/ng-web-comp.js');
  }
  catch(err) {
    console.log("Error in build web component: ", err );
  }

  console.info('Component built successfully.');
})();
