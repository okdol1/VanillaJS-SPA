const fs = require("fs");
const path = require("path");

function updateImports(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      updateImports(filePath);
    } else if (file.endsWith(".js")) {
      let content = fs.readFileSync(filePath, "utf8");
      content = content.replace(
        /import\s+(.*?)\s+from\s+['"]([^'"]+?)\.ts['"]/g,
        'import $1 from "$2.js"'
      );
      fs.writeFileSync(filePath, content, "utf8");
    }
  });
}

updateImports(path.join(__dirname, "dist"));
