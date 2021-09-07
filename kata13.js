const numbersToDates = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December"
}

const talkingCalendar = function(date) {
  let stringArray = date.split('/');
  let year = stringArray[0];
  let month = numbersToDates[stringArray[1]];
  let day = stringArray[2];
  let dayOrdinals;

  // remove leading 0 on the numbered day
  day = day.replace("0", "");

  // determine the Ordinal on the day
  if (day === "1" || day === "21" || day === "31") {
    dayOrdinals = "st";
  } else if (day === "2" || day === "22") {
    dayOrdinals = "nd";
  } else if (day === "3" || day === "23") {
    dayOrdinals = "rd";
  } else {
    dayOrdinals = "th";
  }

  return (month + " " + day + dayOrdinals + ", " + year);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));