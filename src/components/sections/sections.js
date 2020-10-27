import React from 'react';
import styled, { css } from 'styled-components'

const List = styled.li`
    ${props =>
        props.index &&
        css`
            background: palevioletred;
            color: ${props => props.index ? "white" : "blue"};
        `};
`;

const UList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export default function Sections({sections, handleClick, ChapterGroups}) {

    const items = sections.map((section, index) => {
        return (
            <React.Fragment>
                <List index={index + 1} key={index}>{section.name} ({section.translation})</List>
                <List key={`${index}-chaptergroups`}>
                    <ChapterGroups section={section} handleClick={handleClick}/>
                </List>
            </React.Fragment>
        )
    })

    return (
        <UList>
            {items}
        </UList>
    )
}