import { promptUser } from "./modules/promptHandler";
import { streamMessage } from "./utils/streamer";
import { generateAIResponse } from "./modules/llamaRequest";
import { installDependencies } from "./modules/setupManager";
import { pushToGitHub } from "./modules/gitManager";

(async () => {
  streamMessage("Communicating with AI...");
  const userPrompt = await promptUser();

  streamMessage("Generating the lost thoughts...");
  const aiResponse = await generateAIResponse(userPrompt);

  streamMessage("Scaffolding project...");
  await installDependencies(aiResponse);

  streamMessage("Pushing to GitHub...");
  await pushToGitHub(aiResponse.projectName);

  streamMessage("Completed scaffolding 🚀");
})();