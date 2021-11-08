import React from 'react'
import styled from 'styled-components';
import portlogo from './specslogo.svg'
import {useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    function handleclick(e){
        e.preventDefault();
        navigate('/'); 
        
    }
    function handlecontact(e){
        e.preventDefault();
        navigate('contact'); 
        
    }
    return (
        
        <Container>
            <left>
            <img src={portlogo} alt="i" onClick={handleclick}  />
            </left>
            <right>
                <ul>
                    <li>About</li>
                    <li onClick={handlecontact}>Hire Me</li>
                   

                </ul>
            </right>
        </Container>
        
    )
}

export default Header
const Container = styled.div`
width: 100%;
height: 3.8em;
display: flex;
justify-content: space-between;

color: white;
background: black;


left{
    height: 100%;
    img{
        height: 100%;
    }
    padding: 0.4rem 2rem 1rem 3rem;
h3{
    margin-block: 0;
    animation: fadeIn linear 0.7s;
    margin-left: 3rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@keyframes fadeIn {
  0% {opacity:0;
    transform: translateX(-120px);


};
  
  
  100% {opacity:1;
    transform: translateX(0px);}
}


}
right{
    ul{
        display: flex;
        list-style: none;

        
    }

    li{
        padding: 0 2rem 0.5rem 2rem;
        margin-right: 3rem;
        font-weight: 600;
        font-size: 1.1rem;
        cursor: pointer;
        :hover{
            color: rgba(255,255,255,0.4)
        }
        a{
            text-decoration: none;
            color: white ;
            :hover{
                color: rgba(255,255,255,0.4);
            }
        }
    }
}
`;