import React from 'react'
import styled, { css } from 'styled-components'
import { border, space } from 'styled-system'

const Card = styled.div(
    border,
    space
)

export default function Kural({kural, kuralLine1, kuralLine2, explanation, kuralNumber}) {
    return (
        <Card border='1px solid Tan' padding={2} margin={2}>
            <p>
                {kuralLine1}
            </p>
            <p>
                {kuralLine2}
            </p>
            <p>
                {explanation}
            </p>
            {kuralNumber}
        </Card>
    )
}