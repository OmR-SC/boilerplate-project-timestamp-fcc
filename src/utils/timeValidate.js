const isDateOrUnix = (time) => {
  let result = new Date(time);
  if (result != "Invalid Date" && !isNaN(result)) {
    return "D";
  }

  if (time.indexOf("-") > -1) {
    throw new Error("Invalid Date");
  }

  if (!isNaN(new Date(parseInt(time)))) {
    return "U";
  }
  throw new Error("Invalid Date");
};

module.exports = { isDateOrUnix };
