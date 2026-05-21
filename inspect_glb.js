import fs from 'fs';

// We don't have a direct GLTF parser in plain Node easily without installing three.js and relying on DOM.
// But we can just use grep on the file to find names!
