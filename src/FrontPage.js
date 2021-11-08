import React from 'react'
import styled from 'styled-components'
import Skills from './Skills';
import coffee from './coffee-23.gif';



function FrontPage() {
    return (
        
        <Container>
            
                <Skills/>
            
            <cofee>
                <top>
                     <p>Lets have a cup of Coffee</p>
                     <button>Grab It!</button>
                </top>
                <bottom>

                </bottom>
               
            </cofee>
        </Container>
        
    )
}

export default FrontPage
const Container = styled.div`
display: flex;


Skills{
    flex: 0.5;
}
cofee{
flex: 0.5;
display: flex;
flex-direction: column;

top{
    flex: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    font-size: 1.9rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;

}
bottom{
    flex: 0.5;
background-image:  linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1)),linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1)),url(${coffee});
background-repeat: no-repeat;
background-size: 100% 100%;
}
}


button{
    color: #53452c;
    background: #7f7d78;
    outline: none;
    border: none;
    padding: 0.5rem 2rem 0.5rem 2rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor:pointer;
     background: #eee;
  box-shadow: 0 2px 2px -1px #A67B5B, 0 3px 3px 1px #A67B5B;
  :hover{
      box-shadow: 0 0 0 -0.5px #A67B5B, 0 0 0 0.5px #A67B5B;
  }
}

`;