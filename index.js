import { getInput, setOutput, setFailed } from "@actions/core";
import { context } from "@actions/github";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

function currentTimestamp(timeZone) {
  const now = utcToZonedTime(new Date(), timeZone);

  return format(now, "yyMMddHHm", {
    timeZone: timeZone,
  });
}

try {
  const timezone = getInput("timezone");
  console.log(`Timezone: ${timezone}`);

  setOutput("build-number", currentTimestamp(timezone));
} catch (error) {
  setFailed(error.message);
}
