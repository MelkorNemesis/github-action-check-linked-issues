// import { run } from "./action.js";
// import * as util from "./util.js";

// if (util.shouldRun()) {
//   run();
// }

import * as github from "@actions/github";
import { addComment } from "./util.js";
import * as core from "@actions/core";

async function main() {
  const token = core.getInput("github-token");
  const octokit = github.getOctokit(token);

  await addComment({
    octokit,
    prId: 3,
    body: "Hello world! #3",
  });
}

main().catch((error) => {
  core.setFailed(error.message);
  console.error("🔴", error);
});
