import React, { Component } from 'react';

class TextLabel extends Component {
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
    const { DayDistance, FullDate, date, y } = this.props;

    var oldDate = FullDate[0];

    var DaTe = oldDate.getDate();
    var MoNtH = months[oldDate.getMonth()];
    var YeAr = oldDate.getFullYear();

    var storedDate = new Date(`${MoNtH} ${DaTe}, ${YeAr} 00:00:01`);

    let diffTime = Math.abs(date.getTime() - storedDate.getTime());
    let diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    console.log('TEXTLABEL', diffDay);

    let x = diffDay * DayDistance;

    return (
      <text x={x} y={y}>
        {date.getDate() +
          ' ' +
          months[date.getMonth()] +
          ' ' +
          date
            .getYear()
            .toString()
            .substr(-2)}
      </text>
    );
  }
}

export default TextLabel;

// var Difference_In_Time = date.getTime() - FirstDay.getTime();

// var CurrentDay = Difference_In_Time / (1000 * 3600 * 24);
// let RoundedFigureOfCurrentDay = Math.ceil(CurrentDay);

// var diffDay;
// var diffTime;

// let normalDayDistance = DayDistance;

// if (index !== FullDate[0]) {
//   if (date.getDate() === FullDate[index].getDate()) {
//     diffTime = Math.abs(storedDate.getTime() - FirstDay.getTime());
//     diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//   } else {
//     diffTime = Math.abs(storedDate.getTime() - FirstDay.getTime());
//     diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//   }
// }
