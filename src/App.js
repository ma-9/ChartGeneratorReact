// Range of 0px - 1000px

import React, { Component } from 'react';
import './App.css';
import Circle from './Components/Circle';
import TextLabel from './Components/TextLabel';
import Line from './Components/Line';
class App extends Component {
  render() {
    var FullDate = [
      new Date('Thu Jan 16 2020 21:21:17 GMT+0530 (India Standard Time)'),
      new Date('Sat Jan 11 2020 12:21:17 GMT+0530 (India Standard Time)'),
      new Date('Thu Jan 16 2020 14:21:17 GMT+0530 (India Standard Time)'),
      new Date('Sun Jan 12 2020 15:21:17 GMT+0530 (India Standard Time)'),
      new Date('Thu Jan 16 2020 17:21:17 GMT+0530 (India Standard Time)'),
      new Date('Thu Jan 16 2020 21:21:17 GMT+0530 (India Standard Time)')
    ];

    // for (let i = 0; i < FullDate.length; i++) {
    //   if (
    //     FullDate[i].getHours() === 23 &&
    //     FullDate[i].getMinutes() === 59 &&
    //     FullDate[i].getSeconds() === 59
    //   ) {
    //     let currentDate = FullDate[i].getDate();

    //     FullDate[i].setDate(currentDate + 1);
    //     FullDate[i].setHours('00');
    //     FullDate[i].setMinutes('00');
    //     FullDate[i].setSeconds('01');
    //   }
    // }

    FullDate.sort((a, b) => a - b);

    console.log(FullDate);

    let FirstDay = FullDate[0];
    let LastDay = FullDate[FullDate.length - 1];

    let diffTime = Math.abs(LastDay.getTime() - FirstDay.getTime());
    let Difference_In_Days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let lineWidth = 1000;

    // // We have to increment 1 to Difference of Days so we can see last day
    let Differ = Difference_In_Days + 1;

    let DayDistance = lineWidth / Differ;

    // const dDistance = lineWidth / Difference_In_Days;
    const dDistance = DayDistance;
    let dDD = 0;

    // This Array Makes Equal Distance Between The Verticle Lines
    let lineArray = [];
    while (dDD <= lineWidth) {
      lineArray.push(dDD);
      dDD = dDD + dDistance;
    }

    // console.log('APP', Differ);

    // for(let i =0 ; i<=lineWidth;i++){
    //   let value;

    //   value = lineWidth/Difference_In_Days
    // }

    return (
      <div>
        <svg className='graph'>
          <g className='grid y-grid' id='yGrid'>
            <line x1='0' x2={lineWidth} y1='370' y2='370'></line>
          </g>

          {
            // Text Label Component
          }
          <g className='labels x-labels'>
            {FullDate.map((date, index) => (
              <TextLabel
                key={index}
                FullDate={FullDate}
                index={index}
                date={date}
                FirstDay={FirstDay}
                DayDistance={DayDistance}
                y='400'
              />
            ))}
          </g>

          {
            // Data Component
          }
          <g className='data'>
            {FullDate.map((date, index) => (
              <Circle
                key={index}
                cy='370'
                FullDate={FullDate}
                index={index}
                FirstDay={FirstDay}
                date={date}
                DayDistance={DayDistance}
                r='5'
              />
            ))}
          </g>

          {
            //Lines at end of the day}
          }
          <g className='lines'>
            {lineArray.map((axis, index) => (
              <Line key={index} x1={axis} x2={axis} y1='365' y2='375' />
            ))}
          </g>
        </svg>
      </div>
    );
  }
}

export default App;

// Data For Example
// new Date('Fri Jan 03 2020 11:45:20 GMT+0530 (India Standard Time)'),
//       new Date('Mon Jan 06 2020 10:21:40 GMT+0530 (India Standard Time)'),
//       new Date('Wed Jan 08 2020 15:21:17 GMT+0530 (India Standard Time)'),
//       new Date('Thu Jan 09 2020 04:21:17 GMT+0530 (India Standard Time)'),
//       new Date('Thu Jan 16 2020 21:21:17 GMT+0530 (India Standard Time)'),
//       new Date('Thu Jan 16 2020 12:21:17 GMT+0530 (India Standard Time)'),
//       new Date('Thu Jan 13 2020 2:21:17 GMT+0530 (India Standard Time)')

//  // To calculate the time difference of two dates
//  var Difference_In_Time = Math.abs(LastDay.getTime() - FirstDay.getTime());

//  // To calculate the no. of days between two dates
//  var Difference_In_Days = Math.round(
//    Difference_In_Time / (1000 * 3600 * 24)
//  );
