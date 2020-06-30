import React from "react";
import { Platform, View, Text, Dimensions } from "react-native";
import { ThemeContext } from "styled-components";
import { Feather, MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;
import {
  Wrapper,
  Header,
  HeaderContainer,
  Search,
  ModalInnner,
  Box,
  ItemContainer,
  Title,
  Label,
  Value,
  Date,
  BoxValue,
  Actions,
  ActionIcon,
  HeaderTitle,
  ContainerTotal,
  Small,
  ModalBackdrop,
} from "./styles";

const items = require("./data.json");

import Cast from "../../../components/Cast";
import { formatMoney } from "../../../helpers/MoneyFormat";
import { CastContext } from "../../../components/Cast/Context";
import FocusAwareStatusBar from "../../../components/FocusAwareStatusBar";


const expandGroup = (data: any) => {
  let items: any = [];

  for (let i in data) {
    let group = data[i];
    items = [
      ...items,
      {
        isHeader: true,
        title: i,
      },
    ];
    items = [...items, ...group];
  }
  return items;
};

export default function () {
  const theme = React.useContext(ThemeContext);
  const [total, setTotal] = React.useState(0);
  const [data, setData] = React.useState<Array<any>>([]);
   
  const group = items.reduce((a: any, b: any) => {
    a[b.date] = [...(a[b.date] || []), b];
    return a;
  }, {});
  
  const cast = React.useContext(CastContext)
  React.useEffect(() => {
    items.map((item: any) => {
      setTotal((t) => t + Number(String(item.value).replace(".", "")));
      return item;
    });
    setData(expandGroup(group));
  }, []);

  return (
    <CastContext.Consumer>
      {() => (
        <>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
          <Header ios={Platform.OS === "ios"} colors={theme.header.background}>
            <HeaderContainer>
              <HeaderTitle>Lancamentos</HeaderTitle>
              <Actions>
                <ActionIcon>
                  <Feather name="search" color="#fff" size={25} />
                </ActionIcon>
                <ActionIcon>
                  <Icon name="filter-outline" color="#fff" size={25} />
                </ActionIcon>
              </Actions>
            </HeaderContainer>
          </Header>
          <Wrapper>
            <Cast.List data={data} />
          </Wrapper>
          <ContainerTotal>
            <Value>
              <Small>Total</Small> R$ {formatMoney(total)}
            </Value>
          </ContainerTotal>
        </>
      )}
    </CastContext.Consumer>
  );
}

// type MakeProps = {
//   data: Object;
//   onPress: Function;
// };
// function MakeItems<MakeProps>({ data, onPress }) {
//   let items = [];

//   for (let i in data) {
//     let group = data[i];
//     let j = 0;
//     items = [...items, <Date key={i}>{i}</Date>];
//     items = [
//       ...items,
//       ...group.map((item) => {
//         const odd = j % 2 == 0;
//         j += 1;
//         return (
//           <ItemContainer
//             onPress={() => onPress(item)}
//             odd={!odd}
//             key={String(Math.random())}
//           >
//             <Feather
//               size={20}
//               name={item.type === "entrada" ? "arrow-up" : "arrow-down"}
//               color={item.type === "entrada" ? "green" : "red"}
//             />
//             <Box>
//               <Title>{item.title}</Title>
//               <Label>{item.account}</Label>
//             </Box>
//             <BoxValue>
//               <Value>R$ {item.value}</Value>
//               <Label>{item.paid ? "pago" : "não pago"}</Label>
//             </BoxValue>
//           </ItemContainer>
//         );
//       }),
//     ];
//   }
//   return items;
// }
