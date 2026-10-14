import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

export async function installDependencies(data: any) {
  const { projectName, dependencies, setupScripts } = data;

  await execPromise(`mkdir ${projectName}`);
  process.chdir(`./${projectName}`);
  await execPromise(`npm init -y`);

  for (const dep of dependencies) {
    stream(dep.name);
    await execPromise(`npm install ${dep.name}`);
  }

  for (const script of setupScripts) {
    stream(`Setting up ${script.name}`);
    await execPromise(script.bash);
  }
}

function stream(msg: string) {
  console.log(`Setting up ${msg}...`);
}