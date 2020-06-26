import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { View, Dimensions } from "react-native";
import { ThemeContext } from "styled-components";
import { Title, Container, Wrapper, ContainerChart } from "./styles";

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryPie,
} from "victory-native";
import { formatMoney } from "../../../helpers/MoneyFormat";

const data = [
  { x: 150000, y: 150000, label: "Receitas" },
  { x: 20000, y: 20000, label: "Despesas" },
];

const MonthChart = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Wrapper>
      <Title>Resumo Mês</Title>
      <Container>
        <ContainerChart>
          <VictoryPie
            padding={70}
            colorScale={[theme.primary, theme.danger]}
            data={data}
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
        </ContainerChart>
      </Container>
    </Wrapper>
  );
};

export default MonthChart;
