import React, { PureComponent } from 'react'
import { Svg, G, Line, Rect, Text } from 'react-native-svg'
import * as d3 from 'd3'

const GRAPH_MARGIN = 20
const GRAPH_BAR_WIDTH = 5
const colors = {
  axis: '#E4E4E4',
  bars: '#15AD13'
}

export default class BarChart extends PureComponent {
  render() {
    // Dimensions
    const SVGHeight = 150
    const SVGWidth = 300
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN
    const data = this.props.data

    // X scale point
    const xDomain = data.map(item => item.label)
    const xRange = [0, graphWidth]
    const x = d3.scalePoint()
      .domain(xDomain)
      .range(xRange)
      .padding(1)

    // Y scale linear
    const maxValue = d3.max(data, d => d.value)
    const topValue = Math.ceil(maxValue / this.props.round) * this.props.round
    const yDomain = [0, topValue]
    const yRange = [0, graphHeight]
    const y = d3.scaleLinear()
      .domain(yDomain)
      .range(yRange)

    // top axis and middle axis
    const middleValue = topValue / 2

    return (
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight + GRAPH_MARGIN}>
          {/* Top value label */}
          <Text
              x={graphWidth}
              textAnchor="end"
              y={y(topValue) * -1 - 5}
              fontSize={12}
              fill="black"
              fillOpacity={0.4}>
              {topValue + ' ' + this.props.unit}
            </Text>

          {/* top axis */}
          <Line
            x1="0"
            y1={y(topValue) * -1}
            x2={graphWidth}
            y2={y(topValue) * -1}
            stroke={colors.axis}
            strokeDasharray={[3, 3]}
            strokeWidth="0.5"
          />

          {/* middle axis */}
          <Line
            x1="0"
            y1={y(middleValue) * -1}
            x2={graphWidth}
            y2={y(middleValue) * -1}
            stroke={colors.axis}
            strokeDasharray={[3, 3]}
            strokeWidth="0.5"
          />

          {/* bottom axis */}
          <Line
            x1="0"
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke={colors.axis}
            strokeWidth="0.5"
          />

           {/* bars */}
           {data.map(item => (
            <Rect
              key={'bar' + item.label}
              x={x(item.label) - (GRAPH_BAR_WIDTH / 2)}
              y={y(item.value) * -1}
              rx={2.5}
              width={GRAPH_BAR_WIDTH}
              height={y(item.value)}
              fill={colors.bars}
            />
          ))}

          {/* labels */}
          {data.map(item => (
            <Text
            key={'label' + item.label}
            fontSize="12"
            x={x(item.label)}
            y="16"
            textAnchor="middle">{item.label}</Text>
          ))}
        </G>
      </Svg>
    )
  }
}