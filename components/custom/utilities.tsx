import moment from "moment";

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format("D MMM YYYY");
}

export function formatDateTime(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format("H A on D MMM YYYY");
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(
    moment(new Date(eventDate)).diff(new Date())
  );
  return {
    days: parseInt(duration.as("days")),
    hours: duration.get("hours"),
    minutes: duration.get("minutes"),
    seconds: duration.get("seconds")
  };
}

export function toCommaAmount(strOrig) {
  console.log("<<<<<<<<<<<INSIDE TO COMMA AMOUNT >>>>>>>>>>>>>");
  if (strOrig === null) {
    console.log("<<<<<<<<<<<strOrig IS NULLLLLLLL >>>>>>>>");
  } else {
    let strLen = strOrig.length;
    console.log("strLen >>", strLen);
    let builder = "";
    let newamt = "";
    // Initialize StringBuilder with this value.
    if (strOrig.includes(".")) {
      strLen = strLen - 3;
      if (strLen < 4) {
        newamt = strOrig;
      }

      if (strLen == 4) {
        builder = strOrig.slice(0, 1) + "," + strOrig.slice(1, strLen);
        newamt = builder;
      }
      if (strLen == 5) {
        builder = strOrig.slice(0, 2) + "," + strOrig.slice(2, strLen);
        newamt = builder;
      }

      if (strLen == 6) {
        builder = strOrig.slice(0, 3) + "," + strOrig.slice(3, strLen);
        newamt = builder;
      }

      if (strLen == 7) {
        builder =
          strOrig.slice(0, 1) +
          "," +
          strOrig.slice(1, 5) +
          "," +
          strOrig.slice(4, strLen);
        newamt = builder;
      }
      if (strLen == 8) {
        builder =
          strOrig.slice(0, 2) +
          "," +
          strOrig.slice(2, 6) +
          "," +
          strOrig.slice(5, strLen);
        newamt = builder;
      }
      if (strLen == 9) {
        builder =
          strOrig.slice(0, 3) +
          "," +
          strOrig.slice(3, 7) +
          "," +
          strOrig.slice(6, strLen);
        newamt = builder;
      }

      if (strLen == 10) {
        builder =
          strOrig.slice(0, 1) +
          "," +
          strOrig.slice(1, 5) +
          "," +
          strOrig.slice(4, 8) +
          "," +
          strOrig.slice(7, strLen);
        newamt = builder;
      }
      if (strLen == 11) {
        builder =
          strOrig.slice(0, 2) +
          "," +
          strOrig.slice(2, 6) +
          "," +
          strOrig.slice(5, 9) +
          "," +
          strOrig.slice(8, strLen);
        newamt = builder;
      }
    } else {
      if (strLen < 4) {
        newamt = strOrig;
      }

      if (strLen == 4) {
        builder = strOrig.slice(0, 1) + "," + strOrig.slice(1, strLen);
        newamt = builder;
      }
      if (strLen == 5) {
        builder = strOrig.slice(0, 2) + "," + strOrig.slice(2, strLen);
        newamt = builder;
      }

      if (strLen == 6) {
        builder = strOrig.slice(0, 3) + "," + strOrig.slice(3, strLen);
        newamt = builder;
      }

      if (strLen == 7) {
        builder =
          strOrig.slice(0, 1) +
          "," +
          strOrig.slice(1, 5) +
          "," +
          strOrig.slice(4, strLen);
        newamt = builder;
      }
      if (strLen == 8) {
        builder =
          strOrig.slice(0, 2) +
          "," +
          strOrig.slice(2, 6) +
          "," +
          strOrig.slice(5, strLen);
        newamt = builder;
      }
      if (strLen == 9) {
        builder =
          strOrig.slice(0, 3) +
          "," +
          strOrig.slice(3, 7) +
          "," +
          strOrig.slice(6, strLen);
        newamt = builder;
      }

      if (strLen == 10) {
        builder =
          strOrig.slice(0, 1) +
          "," +
          strOrig.slice(1, 5) +
          "," +
          strOrig.slice(4, 8) +
          "," +
          strOrig.slice(7, strLen);
        newamt = builder;
      }
      if (strLen == 11) {
        builder =
          strOrig.slice(0, 2) +
          "," +
          strOrig.slice(2, 6) +
          "," +
          strOrig.slice(5, 9) +
          "," +
          strOrig.slice(8, strLen);
        newamt = builder;
      }
    }

    return "N" + newamt;
  }
}
