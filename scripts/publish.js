const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const pkg = require('../package.json');
const {
  chalkSUCCESS,
  chalkERROR,
  chalkINFO,
} = require('../build-tools/utils/chalkTip');

const packages = fs.readdirSync(path.resolve(__dirname, '../packages/'));
packages.forEach((res) => {
  const stat = fs.statSync(`${path.resolve(__dirname, '../packages/')}/${res}`);
  if (stat.isDirectory()) {
    try {
      console.log(
        chalkINFO(`开始发布线上@huangshuisheng/${res}@${pkg.version}...`)
      );
      // 如果进程超时或有非零退出代码，execSync将抛出Error 对象
      execSync(`git push origin v${pkg.version}`, { stdio: 'inherit' });
      execSync(`git push`, { stdio: 'inherit' });
      execSync('npm publish', {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../'),
      });
      console.log(
        chalkSUCCESS(
          `！！！发布线上@huangshuisheng/${res}@${pkg.version}成功！！！`
        )
      );
    } catch (error) {
      console.log(chalkERROR(`！！！发布线上${res}@${pkg.version}失败！！！`));
      console.log(error);
      console.log(chalkERROR(`！！！发布线上${res}@${pkg.version}失败！！！`));
    }
  }
});
