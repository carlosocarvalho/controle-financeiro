import React from "react";
import { View, Dimensions } from "react-native";
import { ThemeContext } from "styled-components";
import { Title, Container, Wrapper } from "./styles";

import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";
import { formatMoney, abbreviateNumber } from "../../../helpers/MoneyFormat";

/**
 * TODO:  add component calendas for select date interval
 */

const data = [
  { quarter: "Jan", earnings: 103000 },
  { quarter: "Fev", earnings: 16500 },
  { quarter: "Abr", earnings: 14250 },
  { quarter: "Mar", earnings: 19000 },
  { quarter: "Mai", earnings: 19000 },
  { quarter: "Jun", earnings: 19000 },
];

const PeriodicChart = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Wrapper>
      <Title>Últimos 6 meses</Title>
      <Container>
        <VictoryChart
          domainPadding={15}
          width={Dimensions.get("window").width - theme.rawSizes.spacing * 2}
        >
          <VictoryBar
            barWidth={30}
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
                              console.log(props.datum)
                            //const fill = props.style && props.style.fill;
                            //return fill === "black" ? null : { style: { fill: "black" } };
                          }
                        }
                      ];
                  },
                },
              },
            ]}
          />
          <VictoryAxis 
              dependentAxis
              tickFormat={(tick) => {
                  
                  return `${abbreviateNumber(tick/100)}`;
              }}
          />
          <VictoryAxis/>
        </VictoryChart>
      </Container>
    </Wrapper>
  );
};

export default PeriodicChart;
