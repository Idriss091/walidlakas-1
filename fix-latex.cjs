const fs = require('fs');
const files = [
  'src/pages/VirtualWorkApplicationPage.jsx', 
  'src/pages/AnalysisOfDeformationPage.jsx', 
  'src/pages/BasicsMMCPage.jsx'
];

files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content.replace(/math="([^"]*)"/g, 'math={String.raw`$1`}');
  fs.writeFileSync(f, newContent);
  console.log('Updated ' + f);
});
