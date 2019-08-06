import React from "react";
import ReactDOM from "react-dom"

import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

class Curved extends React.Component {
  render() {

    const data = [
      {
        month: "Jan",
        city: "Tokyo",
        value: 7
      },
      {
        month: "Jan",
        city: "London",
        value: 3.9
      },
      {
        month: "Feb",
        city: "Tokyo",
        value: 6.9
      },
      {
        month: "Feb",
        city: "London",
        value: 4.2
      },
      {
        month: "Mar",
        city: "Tokyo",
        value: 9.5
      },
      {
        month: "Mar",
        city: "London",
        value: 5.7
      }
    ];

    const cols = {
      month: {
        range: [0, 1]
      }
    };

    return (
      <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Legend />
          <Axis name="month" />
          <Axis
            name="value"
            label={{
              formatter: val => `${val}°C`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*value"
            size={2}
            color={"city"}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="month*value"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<Curved />, document.getElementById("root"));

