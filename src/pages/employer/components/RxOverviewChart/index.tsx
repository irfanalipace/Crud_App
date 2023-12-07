import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryTheme,
  VictoryLegend,
  VictoryAxis,
} from "victory";

import { Heading, Switch } from "~/components";
import { rxOverviewData } from "~/data";

export const EmployerRxOverviewChart: React.FC = () => {
  return (
    <Box marginTop="70px">
      <Heading fontSize={24} fontWeight="bold" color="primary.200" textTransform="uppercase">
        Rx Overview: Brand vs Generic vs Specialty
      </Heading>
      <VictoryChart theme={VictoryTheme.material} height={120} padding={30}>
        <VictoryLegend
          titleOrientation="left"
          x={0}
          y={4}
          symbolSpacer={2}
          gutter={10}
          orientation="horizontal"
          style={{ border: { strokeWidth: 0 }, labels: { fontSize: 4 }, data: { fontSize: 1 } }}
          data={[
            { name: "BRAND", symbol: { fill: "#0075db" } },
            { name: "GENERIC", symbol: { fill: "#003b6e" } },
            { name: "SPECIALTY", symbol: { fill: "#f58f18" } },
          ]}
          events={[
            {
              target: "labels",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: props => {
                        const fill = props.style && props.style.fill;
                        return fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
        <VictoryAxis
          style={{
            tickLabels: { fontSize: 4 },
            axisLabel: { fontSize: 4 },
            ticks: { strokeWidth: 0 },
            grid: { strokeWidth: 0 },
            axis: { strokeWidth: 0 },
          }}
          offsetY={39}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: { fontSize: 4 },
            axisLabel: { fontSize: 4 },
            axis: { strokeWidth: 0 },
            ticks: { strokeWidth: 0 },
            grid: { strokeWidth: 1 },
          }}
          tickValues={[0, 100000, 200000, 300000]}
          tickFormat={t => (t === 0 ? "0.0" : `$${Math.round(t).toLocaleString()}`)}
        />
        <VictoryGroup offset={15}>
          <VictoryBar
            name="bar-1"
            cornerRadius={{
              topLeft: 2,
              topRight: 2,
            }}
            style={{
              data: { fill: "#0075db" },
            }}
            alignment="middle"
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={rxOverviewData[0]}
          />
          <VictoryBar
            name="bar-2"
            cornerRadius={{
              topLeft: 2,
              topRight: 2,
            }}
            style={{ data: { fill: "#003b6e" } }}
            alignment="middle"
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={rxOverviewData[1]}
          />
          <VictoryBar
            name="bar-3"
            cornerRadius={{
              topLeft: 2,
              topRight: 2,
            }}
            style={{ data: { fill: "#f58f18" } }}
            alignment="middle"
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={rxOverviewData[2]}
          />
        </VictoryGroup>
      </VictoryChart>
      <Flex marginTop="0px" justifyContent="flex-end">
        <Switch
          options={[
            { label: "COST", value: "cost" },
            { label: "COUNT", value: "count" },
          ]}
        />
      </Flex>
    </Box>
  );
};
