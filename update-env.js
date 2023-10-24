const fs = require('fs');
const path = require('path');

const newContractAddress = process.argv[2];

const envPath = path.join(__dirname, '.env.local');
let envContents = fs.readFileSync(envPath, 'utf8');
envContents = envContents.replace(/CONTRACT_ADDRESS=".*"/, `CONTRACT_ADDRESS="${newContractAddress}"`);
fs.writeFileSync(envPath, envContents);
