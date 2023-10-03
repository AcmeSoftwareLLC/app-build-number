import { getInput, setOutput, setFailed, summary } from "@actions/core";
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
  const buildNumber = currentTimestamp(timezone);

  setOutput("build-number", buildNumber);

  summary.addHeading("Summary").addTable({
    title: "Generation Summary",
    rows: [
      ["Timezone", timezone],
      ["Build Number", buildNumber],
    ],
  });
} catch (error) {
  setFailed(error.message);
}
