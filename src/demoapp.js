import React, { useState } from 'react';
import styled from 'styled-components'
import { layout, flexbox, space, color } from 'styled-system'
import TableOfContents from "./components/tableofcontents/tableofcontents";
import KuralsPage from './components/kuralspage/kuralspage';

const FlexContainer = styled.div(
    {
      boxSizing: 'border-box',
      minWidth: 0,
      display: 'flex'
    },
    layout,
    flexbox,
    space
  )

const LeftSide = styled.div(
    layout,
    flexbox,
    space
)

const CenterContent = styled.div(
    layout,
    flexbox,
    space
)

const NavBar = styled.div(
    layout,
    flexbox,
    space
)

const Heading = styled.h1(
    space,
    color
)


export default function DemoApp() {
    const [startNo, setStartNo] = useState(1);
    const [endNo, setEndNo] = useState(10);

    return (
        <FlexContainer flexDirection='row' flexWrap='wrap'>
            <NavBar flex='1 100%'><Heading color='DarkSlateGray' margin={0}>Thirukkural UI</Heading></NavBar>
            <LeftSide padding={2} overflow='auto' flex='1 0 0'>
                <TableOfContents handleClick={(startNo, endNo) => {
                    setStartNo(startNo)
                    setEndNo(endNo)
                }}/>
            </LeftSide>
            <CenterContent padding={2} overflow='auto' flex='2 0 0'>
                <KuralsPage startKno={startNo} endKno={endNo}/>
            </CenterContent>
        </FlexContainer>
    )
}
