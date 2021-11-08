import React from 'react'
import styled from 'styled-components'
import coffee from './coffee-23.gif';
function Hire() {
    return (
        <Container>
            <glass>
            <form>
                <input type="text" placeholder="Name"/>
                <textarea placeholder="Enter Your Message" rows="4" />
                <button>Submit</button>
            </form>
            </glass>
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

export default Hire
const Container = styled.div`
display: flex;
width: 100%;
height: 90.5vh;
animation-name: example;
  animation-duration: 1s;



  @keyframes example {
  0% {opacity: 0;}
  50% {opacity: 0.5;}
  100% {opacity: 1;}
}
glass{
    flex: 0.5;
    height: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
   
    form{
    
  
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80%;
width: 90%;
color: white;
background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    overflow: hidden;
    z-index: 10;
    // backdrop-filter: blur(15px);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);


        input{
            border: none;
            outline: none;
            background: transparent;
            height: 1rem;
            color: white;
            margin: 2rem 0 2rem 0;
            padding: 1rem;
            border-radius: 8px;
            border-top: 0.1px solid rgba(255, 255, 255, 0.2);
    border-left: 0.1px solid rgba(255, 255, 255, 0.2);
    font-size: 1rem;
    
    
    }
    textarea{
            border: none;
            outline: none;
            background: transparent;
            height: 1rem;
            color: white;
            margin: 2rem 0 2rem 0;
            padding: 1rem;
            border-radius: 8px;
            border-top: 0.1px solid rgba(255, 255, 255, 0.2);
            border-left: 0.1px solid rgba(255, 255, 255, 0.2);
            font-size: 1rem;
            height: auto;
            width: 60%;
            overflow-y: auto;
            text-transform: capitalize;
            letter-spacing: 1px;
            
            
        }
        button{
            margin-top: 2rem;
        }
    }
}
cofee{
flex: 0.5;
display: flex;
flex-direction: column;
height: 100%;
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