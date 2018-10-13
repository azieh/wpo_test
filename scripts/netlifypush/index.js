const path = require('path');
const fs = require('fs');

module.exports = (bundler) => {
    // when bundle created
    bundler.on('bundled', (bundle) => {
        // if bundle is for the index.html
        if(bundle.type == 'html') {
            // child bundles set -> child bundles list -> find first css -> get the name
            const fullPath = Array.from(bundle.childBundles).find(b => b.type === 'css').name;

            // take only the file name
            const criticalCss = fullPath.split('/').pop();

            // create Netlify formatted Link with a push hint
            const content = `/\n  Link: </${criticalCss}>; rel=preload; as=style`;

            // create a file _headers with our content in a directory where index.html landed after build (which is dist)
            fs.writeFileSync(path.join(path.dirname(fullPath), "_headers"), content);
        }
    });
};