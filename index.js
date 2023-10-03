import { getInput, setOutput, setFailed } from "@actions/core";
import { context } from "@actions/github";
import { format } from "date-fns";

function currentTimestamp(timeZone) {
  const now = new Date();

  return format(now, "yyMMddHHm", {
    timeZone: timeZone,
  });
}

try {
  const timezone = getInput("timezone");
  console.log(`Timezone: ${timezone}`);
  const time = new Date().toTimeString();
  setOutput("build-number", currentTimestamp(timezone));

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  setFailed(error.message);
}
