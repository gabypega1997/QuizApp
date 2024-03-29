import styled, {createGlobalStyle} from 'styled-components'
import background from "./images/background.jpg"


export const GlobalStyle = createGlobalStyle `
    html {
        height: 100%;
    }

    body{
        background-image: url(${background});
        background-size: cover;
        margin:0;
        padding: 0 20px;
        display:flex;
        justify-content:center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;


export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    .container-start{
        display:flex;
        flex-direction: column;
        align-items: center;
    
    }

    >p{
        color: #fff;
    }
    .score{
        color:#fff;
        font-size:2rem;
        margin:0;
    }
    h1{
        font-faily: Fascinate Inline, sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff );
        background-size:100%;
        background-clip:text;
        -webkit-background-clip:text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip:text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3)
        font-size: 70px;
        font-weight:400;
        text-align:center;
        margin:20px;
    }

    .start, .next, .restart{
        cursor:pointer;
        background:linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
    .restart{
        height:30px;
        padding: 0 25px;
        background:linear-gradient(90deg, #ff5656, #c16868);
        border:none;
    }
    .start{
        max-width: 200px;
        
    }
    .difficulty-buttons > button{
        background:linear-gradient(90deg, #ff5656, #c16868);
        padding:5px 10px;
        margin:5px;
        border-radius:10px;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border:none;      
    }
    .difficulty-buttons > button:hover, .restart:hover{
        cursor:pointer;
        opacity:0.8;
    }

`