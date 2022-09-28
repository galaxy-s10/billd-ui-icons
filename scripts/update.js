const fs = require('fs');
const path = require('path');
const { readJSONSync, writeJSONSync } = require('fs-extra');

const DIR_PACKAGES = path.resolve(__dirname, '../packages');

exports.updatePackageJSON = () => {
  const pkg = readJSONSync(path.resolve(__dirname, '../package.json')); // 项目根目录的package.json
  const pkgPath = path.resolve(__dirname, '../package.json'); // 项目根目录的package.json路径
  const packageJSON = readJSONSync(pkgPath);
  packageJSON.version = pkg.version;
  writeJSONSync(pkgPath, packageJSON, { spaces: 2 });

  const packages = fs.readdirSync(path.resolve(__dirname, '../packages/'));
  packages.forEach((res) => {
    const stat = fs.statSync(
      `${path.resolve(__dirname, '../packages/')}/${res}`
    );
    if (stat.isDirectory()) {
      const packageDir = path.join(DIR_PACKAGES, res);
      const packageJSONPATH = path.join(packageDir, 'package.json'); // 项目packages/*里面的package.json
      const packageJSON = readJSONSync(packageJSONPATH);
      packageJSON.version = pkg.version;
      writeJSONSync(packageJSONPATH, packageJSON, { spaces: 2 });
    }
  });
};
