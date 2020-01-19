var FullDate = [
  new Date('Thu Jan 16 2020 21:21:17 GMT+0530 (Indian Standard Time)'),
  new Date('Sat Jan 11 2020 12:21:17 GMT+0530 (Indian Standard Time)'),
  new Date('Thu Jan 16 2020 14:21:17 GMT+0530 (Indian Standard Time)'),
  new Date('Sun Jan 12 2020 15:21:17 GMT+0530 (Indian Standard Time)'),
  new Date('Thu Jan 16 2020 17:21:17 GMT+0530 (Indian Standard Time)'),
  new Date('Thu Sep 14 1999 21:21:17 GMT+0530 (Indian Standard Time)')
];

var newArrayOfDates = [];

var sortingDates = (date1, date2) => {
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

FullDate.sort(sortingDates);

// console.log(FullDate);

// for (let i = 0; i < FullDate.length; i++) {
//   //   console.log(i + ': ' + FullDate[i] + '\n');
//   newArrayOfDates.push(FullDate[i]);
// }

// // console.log(newArrayOfDates[newArrayOfDates.length - 1]);

// const date = newArrayOfDates[0];
// console.log(newArrayOfDates.length);

const media1 =
  ((FullDate[0].getDate() - 11) * 24 * 60 +
    FullDate[0].getHours() * 60 +
    FullDate[0].getMinutes()) /
  10;
const media2 =
  ((FullDate[1].getDate() - 11) * 24 * 60 +
    FullDate[1].getHours() * 60 +
    FullDate[1].getMinutes()) /
  10;
const media3 =
  ((FullDate[2].getDate() - 11) * 24 * 60 +
    FullDate[2].getHours() * 60 +
    FullDate[2].getMinutes()) /
  10;
const media4 =
  ((FullDate[3].getDate() - 11) * 24 * 60 +
    FullDate[3].getHours() * 60 +
    FullDate[3].getMinutes()) /
  10;
const media5 =
  ((FullDate[4].getDate() - 11) * 24 * 60 +
    FullDate[4].getHours() * 60 +
    FullDate[4].getMinutes()) /
  10;
const media6 =
  ((FullDate[5].getDate() - 11) * 24 * 60 +
    FullDate[5].getHours() * 60 +
    FullDate[5].getMinutes()) /
  10;

// calculate total seconds in the entire range of day
let totalSeconds = FullDate.length * 24 * 60 * 60;

let FirstDay = FullDate[0];
let LastDay = FullDate[FullDate.length - 1];

// To calculate the time difference of two dates
var Difference_In_Time = LastDay.getTime() - FirstDay.getTime();

// To calculate the no. of days between two dates
// var Difference_In_Days = Difference_In_Time / (1000 * 60 * 60 * 24);
var Difference_In_Days = FullDate[1].getTime() - FirstDay.getTime();

var lllDay = Difference_In_Days / (1000 * 60 * 60 * 24);

// console.log(Math.floor(lllDay));

console.log(
  FullDate[0]
    .getYear()
    .toString()
    .substr(-2)
);
