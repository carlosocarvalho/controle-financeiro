import React from "react";
import { Container } from "./styles";
import Item from "./Item";
import { DepositProvider } from "../Context/DepositContext";
import Deposit from "./Deposit";
import Form from "../Form";

const items = [
  {
    target: 10000.0,
    value: 100,
    title: "Carro",
    percentual: 10,
    items: [],
  },
  {
    target: 100000.0,
    value: 35000,
    title: "Casa",
    percentual: 59,
    items: [
      {
        date: "20/02/2020",
        value: 35000,
        title:
          "Compra de Imoveis na regiao sul de sao paulo, VILA VERDE II, REGIAO LESTE",
      },
      {
        date: "20/02/2020",
        value: 32200,
        title: "Investimento 1",
      },
      {
        date: "20/02/2020",
        value: 35000,
        title:
          "Compra de Imoveis na regiao sul de sao paulo, VILA VERDE II, REGIAO LESTE",
      },
      {
        date: "20/02/2020",
        value: 32200,
        title: "Investimento 1",
      },
      {
        date: "20/02/2020",
        value: 35000,
        title:
          "Compra de Imoveis na regiao sul de sao paulo, VILA VERDE II, REGIAO LESTE",
      },
      {
        date: "20/02/2020",
        value: 32200,
        title: "Investimento 1",
      },
      {
        date: "20/02/2020",
        value: 35000,
        title:
          "Compra de Imoveis na regiao sul de sao paulo, VILA VERDE II, REGIAO LESTE",
      },
      {
        date: "20/02/2020",
        value: 32200,
        title: "Investimento 1",
      },
    ],
  },
];

export default function () {
  return (
    <Container>
      {items.map((item) => (
        <Item key={String(Math.random())} data={item} />
      ))}
      <Deposit />
      <Form />
    </Container>
  );
}
