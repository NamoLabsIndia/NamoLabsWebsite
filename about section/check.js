const fs = require('fs');
const babel = require('@babel/core');

const content = fs.readFileSync('R:/files/preview.html', 'utf8');
const scriptMatch = content.match(/<script type="text\/babel" data-presets="react">([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.log("Could not find babel script tag");
  process.exit(1);
}

const babelScript = scriptMatch[1];
try {
  babel.transformSync(babelScript, { presets: ['@babel/preset-react'] });
  console.log('No syntax errors detected by babel.');
} catch (e) {
  console.error("Syntax Error found:");
  console.error(e.message);
}
