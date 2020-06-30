import React from "react";
import { View, Dimensions } from "react-native";
import { ThemeContext } from "styled-components";
import { Title, Container, Wrapper } from "./styles";

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import { formatMoney, abbreviateNumber } from "../../../helpers/MoneyFormat";
import ChartContainer from "../ChartContainer";

/**
 * TODO:  add component calendas for select date interval
 */

const data = [
  { quarter: "Jan", earnings: 103000 },
  { quarter: "Fev", earnings: 116500 },
  { quarter: "Abr", earnings: 124250 },
  { quarter: "Mar", earnings: 219000 },
  { quarter: "Mai", earnings: 419000 },
  { quarter: "Jun", earnings: 519000 },
];

const PeriodicChart = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Wrapper>
      <Title>Últimos 6 meses</Title>
      <Container>
        <ChartContainer>
          <VictoryChart
            domainPadding={18}
            width={Dimensions.get("window").width - theme.rawSizes.spacing * 2}
          >
            <VictoryBar
              barWidth={35}
              style={{
                data: {
                  fill: theme.secondary,
                },
              }}
              data={data}
              x="quarter"
              y="earnings"
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: "data",
                          mutation: (props) => {
                            console.log(props.datum);
                            //const fill = props.style && props.style.fill;
                            //return fill === "black" ? null : { style: { fill: "black" } };
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
                axis: { stroke: theme.secondary },
              }}
              dependentAxis
              tickFormat={(tick) => {
                return `${abbreviateNumber(tick / 100)}`;
              }}
            />
            <VictoryAxis
              style={{
                axis: { stroke: theme.secondary },
              }}
            />
          </VictoryChart>
        </ChartContainer>
      </Container>
    </Wrapper>
  );
};

export default PeriodicChart;
