// import { run } from "./action.js";
// import * as util from "./util.js";

// if (util.shouldRun()) {
//   run();
// }

import * as github from "@actions/github";
import { addCommentRest } from "./util.js";
import * as core from "@actions/core";

async function main() {
  const token = core.getInput("github-token");
  const octokit = github.getOctokit(token);
  const { payload } = github.context;

  const {
    repository: { owner, name },
  } = payload;

  await addCommentRest({
    octokit,
    body: "Hello world!",
    owner: owner.login,
    repo: name,
    prNumber: 3,
  });
}

main().catch((error) => {
  core.setFailed(error.message);
  console.error("🔴", error);
});
