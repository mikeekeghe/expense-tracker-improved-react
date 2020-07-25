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

export function toCommaAmount(strTotal) {
  let strLen = strTotal.length();
  console.log("strLen >>", strLen);
  let builder = "";
  let newamt = "";
  // Initialize StringBuilder with this value.
  if (strTotal.contains(".")) {
    strLen = strLen - 3;
    if (strLen < 4) {
      newamt = strTotal;
    }

    if (strLen == 4) {
      builder.insert(1, ",");
      newamt = builder.toString();
    }
    if (strLen == 5) {
      builder.insert(2, ",");
      newamt = builder.toString();
    }

    if (strLen == 6) {
      builder.insert(3, ",");
      newamt = builder.toString();
    }

    if (strLen == 7) {
      builder.insert(4, ",");
      newamt = builder.toString();
    }
    if (strLen == 8) {
      builder.insert(2, ",");
      builder.insert(6, ",");
      newamt = builder.toString();
    }
    if (strLen == 9) {
      builder.insert(3, ",");
      builder.insert(7, ",");
      newamt = builder.toString();
    }

    if (strLen == 10) {
      builder.insert(4, ",");
      builder.insert(8, ",");
      newamt = builder.toString();
    }
    if (strLen == 11) {
      builder.insert(2, ",");
      builder.insert(6, ",");
      builder.insert(9, ",");
      newamt = builder.toString();
    }
  } else {
    if (strLen < 4) {
      newamt = strTotal;
    }

    if (strLen == 4) {
      builder.insert(1, ",");
      newamt = builder.toString();
    }
    if (strLen == 5) {
      builder.insert(2, ",");
      newamt = builder.toString();
    }

    if (strLen == 6) {
      builder.insert(3, ",");
      newamt = builder.toString();
    }

    if (strLen == 7) {
      builder.insert(4, ",");
      newamt = builder.toString();
    }
    if (strLen == 8) {
      builder.insert(2, ",");
      builder.insert(6, ",");
      newamt = builder.toString();
    }
    if (strLen == 9) {
      builder.insert(3, ",");
      builder.insert(7, ",");
      newamt = builder.toString();
    }

    if (strLen == 10) {
      builder.insert(4, ",");
      builder.insert(8, ",");
      newamt = builder.toString();
    }
    if (strLen == 11) {
      builder.insert(2, ",");
      builder.insert(6, ",");
      builder.insert(9, ",");
      newamt = builder.toString();
    }
  }

  return newamt;
}
