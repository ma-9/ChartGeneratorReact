import React, { Component } from 'react';

class Circle extends Component {
  render() {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    const { date, r, cy, FullDate, DayDistance } = this.props;

    var oldDate = FullDate[0];

    var DaTe = oldDate.getDate();
    var MoNtH = months[oldDate.getMonth()];
    var YeAr = oldDate.getFullYear();

    var storedDate = new Date(`${MoNtH} ${DaTe}, ${YeAr}`);

    let diffTime = Math.abs(date.getTime() - storedDate.getTime());
    let diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Getting Current Date & Time
    let h = date.getHours() * 3600;
    let m = date.getMinutes() * 60;
    let s = date.getSeconds();

    // Lets Make Calculation to create points
    let totalSecondInToday = h + m + s;

    let secondtoCurrentDay = totalSecondInToday / 86400;

    let totalConversion = diffDay + secondtoCurrentDay;

    let x = DayDistance * totalConversion;

    // console.log('CIRCLE', diffDay);

    return <circle cx={x} cy={cy} data-value={date} r={r}></circle>;
  }
}

export default Circle;

// let tillTodaySecond = RoundedFigureOfCurrentDay * 86400;

// let secondToTilDays = tillTodaySecond / 86400;

// if (CurrentDay === 0) {
//   CurrentDay = 1;
// }

// if (index !== FullDate[0]) {
//   if (date.getDate() === FullDate[index].getDate()) {
//     diffTime = Math.abs(date.getTime() - FirstDay.getTime());
//     diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//   } else {
//     diffTime = Math.abs(date.getTime() - FirstDay.getTime());
//     diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//   }
// }

// var diffDay;
// var diffTime;

// let StartDay = FirstDay.getDate();
// let today = date.getDate();
// let diffTime = Math.abs(date - FirstDay);
// let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// let CurrentDay = today - StartDay;
