import simpleGit from "simple-git";

export async function pushToGitHub(projectName: string) {
  const git = simpleGit();
  await git.init();
  await git.add(".");
  await git.commit("Project setup");

  // Fake: Repo creation API logic will go here
  console.log(`GitHub repo initialized for ${projectName}`);
}