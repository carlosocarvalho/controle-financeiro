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
import { Title, Container, Wrapper, ContainerChart, Label } from "./styles";

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryPie,
} from "victory-native";
import { formatMoney } from "../../../helpers/MoneyFormat";
import { CastContext } from "../../Cast/Context";

const data = [
  { x: 150000, y: 150000, label: 'Receitas' },
  { x: 20000, y: 20000, label: 'Despesas' },
];

const MonthChart = () => {
  const theme = React.useContext(ThemeContext);
  const {  handleToggleCast }  = React.useContext(CastContext)
  return (
    <Wrapper>
      <Title>Resumo Mês</Title>
      <Container>
        <ContainerChart>
          <VictoryPie
            padding={70}
            colorScale={[theme.text, theme.danger]}
            data={data}
            style={{
              
              labels: {
                fontSize: 13,
                fontWeight: 'bold'
              },
            }}
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
                          handleToggleCast()
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
