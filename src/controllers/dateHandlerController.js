const { isDateOrUnix } = require("../utils/timeValidate");

const getCurrentTime = (req, res) => {
  const date = new Date();
  const unix = date.getTime();
  const utc = date.toUTCString();
  res.status(200).json({ unix, utc });
};

const getTime = (req, res) => {
  let unix, utc;

  const { date } = req.params;

  try {
    const response = isDateOrUnix(date);
    if (response == "D") {
      unix = new Date(date).getTime();
      utc = new Date(date).toUTCString();
      res.status(200).json({ unix, utc });
    } else if (response == "U") {
      unix = parseInt(date);
      utc = new Date(unix).toUTCString();
      res.status(200).json({ unix, utc });
    }
  } catch (error) {
    res.json({ error: error.message || "Invalid Date" });
  }
};

module.exports = { getCurrentTime, getTime };
