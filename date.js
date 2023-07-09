function getDate() {
  let currentDay = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = currentDay.toLocaleDateString("en-US", options);

  return day;
}

module.exports = getDate;
