import ora from "ora";

const spinner = ora();

export function streamMessage(msg: string) {
  spinner.text = msg;
  spinner.start();
  setTimeout(() => spinner.succeed(msg), 1000); // Simulate delay for effect
}