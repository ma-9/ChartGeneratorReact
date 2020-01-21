import React, { Component } from 'react';
import './index.css';
import Circle from '../ChartComponent/Circle';
import TextLabel from '../ChartComponent/TextLabel';
import Line from '../ChartComponent/Line';
class Charts extends Component {
  state = {
    FullDate: []
  };

  render() {
    const { date } = this.props;

    this.state.FullDate.push(new Date(date));

    this.state.FullDate.sort((a, b) => a - b);

    let FirstDay = this.state.FullDate[0];
    let LastDay = this.state.FullDate[this.state.FullDate.length - 1];

    let diffTime = Math.abs(LastDay.getTime() - FirstDay.getTime());
    let Difference_In_Days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let lineWidth = 1000;

    let Differ = Difference_In_Days + 1;

    let DayDistance = lineWidth / Differ;

    const dDistance = DayDistance;
    let dDD = 0;

    let lineArray = [];
    while (dDD <= lineWidth) {
      lineArray.push(dDD);
      dDD = dDD + dDistance;
    }
    return (
      <div>
        <svg className='graph'>
          <g className='grid y-grid' id='yGrid'>
            <line x1='0' x2={lineWidth} y1='70' y2='70'></line>
          </g>
          <g className='labels x-labels'>
            {this.state.FullDate.map((date, index) => (
              <TextLabel
                key={index}
                FullDate={this.state.FullDate}
                index={index}
                date={date}
                FirstDay={FirstDay}
                DayDistance={DayDistance}
                y='50'
              />
            ))}
          </g>
          <g className='data'>
            {this.state.FullDate.map((date, index) => (
              <Circle
                key={index}
                cy='70'
                FullDate={this.state.FullDate}
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
              <Line key={index} x1={axis} x2={axis} y1='65' y2='75' />
            ))}
          </g>
        </svg>
      </div>
    );
  }
}

export default Charts;
