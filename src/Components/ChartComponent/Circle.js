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

    return <circle cx={x} cy={cy} data-value={date} r={r}></circle>;
  }
}

export default Circle;
