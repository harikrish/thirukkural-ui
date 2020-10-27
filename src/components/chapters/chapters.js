import React from 'react';
import styled from 'styled-components'

const UList = styled.ul`
    list-style-type: none;
    padding: 0;
`

const ListButton = styled.button`
    width: 100%
`

export default function Chapters({chapters, handleClick}) {
    const citems = chapters.map((chapter, index) => {
        return (
            <li key={index}>
                <ListButton onClick={() => {
                    handleClick(chapter.start, chapter.end)
                }}>
                    {chapter.name} {' '}
                    ({chapter.translation})
                    ({chapter.start}, {chapter.end})
                </ListButton>
            </li>
        )
    })

    return (
        <UList>
            {citems}
        </UList>
    )
}