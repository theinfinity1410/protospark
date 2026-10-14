import inquirer from "inquirer";

export async function promptUser(): Promise<string> {
  const { projectPrompt } = await inquirer.prompt([
    {
      type: "input",
      name: "projectPrompt",
      message: "Describe your project:",
    },
  ]);

  return projectPrompt;
}