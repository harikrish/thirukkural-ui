import React from 'react';
import styled, { css } from 'styled-components'

const List = styled.li`
    ${props =>
        props.index &&
        css`
            background: LightSeaGreen;
            color: ${props => props.index ? "white" : "blue"};
        `};
`;

const UList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export default function ChapterGroups({chaptergroups, handleClick, Chapters}) {
    const cgitems =  chaptergroups.map((chaptergroup, index) => {
        return (
            <React.Fragment>
                <List index={index + 1} key={index}>{chaptergroup.name} ({chaptergroup.translation})</List>
                <List key={`${index}-chapters`}><Chapters chaptergroup={chaptergroup} handleClick={handleClick}/></List>
            </React.Fragment>
        )
    });

    return (
        <UList>
            {cgitems}
        </UList>
    )
}