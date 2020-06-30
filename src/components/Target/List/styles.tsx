import styled from "styled-components/native";
import ThemeContract from "../../../themes/@types";


export const Container = styled.ScrollView`
   
   padding:${({theme}: ThemeContract ) => theme.sizes.spacing }
`