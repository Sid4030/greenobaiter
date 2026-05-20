import fs from 'fs';

function extractNames(filePath) {
  const buffer = fs.readFileSync(filePath);
  // GLB format:
  // 4 bytes: magic 'glTF'
  // 4 bytes: version
  // 4 bytes: length
  // 4 bytes: JSON chunk length
  // 4 bytes: JSON chunk type 'JSON'
  const jsonChunkLength = buffer.readUInt32LE(12);
  const jsonChunk = buffer.toString('utf8', 20, 20 + jsonChunkLength);
  const gltf = JSON.parse(jsonChunk);
  
  const nodes = gltf.nodes || [];
  const names = nodes.map(n => n.name).filter(Boolean);
  console.log("Found node names:", names.join(', '));
}

extractNames('public/Untitled21.glb');
