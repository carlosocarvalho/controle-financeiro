import React from 'react';
import { ThemeContext } from 'styled-components';


import {Wrapper, Header, HeaderContainer, Title, Container } from  './styles'

import MonthChart from '../../components/Chart/Month'
import PeriodicChart from '../../components/Chart/Periodic';

export default function(){
    const theme = React.useContext(ThemeContext)
    return (
        <Wrapper>
            <Header colors={theme.header.background}>
                <HeaderContainer>
                    <Title>Resumo</Title>
                </HeaderContainer>
            </Header>
            <Container>
                  <PeriodicChart />
                 <MonthChart />
            </Container>
        </Wrapper>
    )
} 