import React from 'react'
import styled from 'styled-components'
function Backpage() {
    return (
        <Container>
            Back
        </Container>
    )
}

export default Backpage
const Container = styled.div`
position: absolute;
height: 100vh;
width: 100vw;
background: coral;
transform: rotateY(180deg);

`;