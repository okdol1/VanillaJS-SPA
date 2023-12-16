const fs = require("fs");
const path = require("path");

function copyStaticFiles(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir);

  files.forEach((file) => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    const stat = fs.statSync(srcFile);

    if (stat.isDirectory()) {
      copyStaticFiles(srcFile, destFile);
    } else if (!file.endsWith(".js") && !file.endsWith(".ts")) {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

copyStaticFiles(path.join(__dirname, "app"), path.join(__dirname, "dist"));
