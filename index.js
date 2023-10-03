import { getInput, setOutput, setFailed, summary } from "@actions/core";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

function currentTimestamp(timeZone) {
  const now = utcToZonedTime(new Date(), timeZone);

  return format(now, "yyMMddHHmm", {
    timeZone: timeZone,
  });
}

try {
  const timezone = getInput("timezone");
  const buildNumber = currentTimestamp(timezone).slice(0, -1);

  setOutput("build-number", buildNumber);

  summary
    .addHeading("Summary")
    .addTable([
      [
        { data: "Description", header: true },
        { data: "Result", header: true },
      ],
      ["Timezone", timezone],
      ["Build Number", buildNumber],
    ])
    .write();
} catch (error) {
  setFailed(error.message);
}
