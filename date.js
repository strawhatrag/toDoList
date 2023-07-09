const currentDay = new Date();

function getDate() {
  return currentDay.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function getDay() {
  return currentDay.toLocaleDateString("en-US", { weekday: "long" });
}

module.exports = { getDate, getDay };
