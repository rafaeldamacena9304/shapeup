import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    //General style

    :root{
        --blue:#00A89F;
        --lightBlue:#00C9BF;
        --darkBlue:#00635E;
        --gray:#DDD;
        --lightGray:#EEE;
        --darkGray:#BBB;
        --black:#0D0D0D;
        --blueGradient:linear-gradient(to left, #00635E,  #00C9BF);
        --greenGradient: linear-gradient(to left, #00995C, #00FF99);
        --yellowGradient: linear-gradient(to left, #997A00, #FFCC00);
        --redGradient: linear-gradient(to left, #991E1E, #FF3232);
    }

    *, *::after, *::before{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Rethink Sans', sans-serif;
    }

    body{
        background-color:#111;
    }

    .container{
        margin:0 auto;
        max-width:1024px;
        width:100%;
    }
    
    .active{
        background-image:var(--blueGradient);
        color:transparent;
        background-clip:text;
    }

    // Home
    .login{
        color:var(--gray);
        font-weight:600;

        span{
            text-decoration:underline;
            cursor:pointer;
        }
    }

    //Dashboard style

    .subTitle{
        font-size:24px;
        font-weight:500;
        color:white;
    }
    .topContainer{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:80px;
    }
    .cardList{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
    }
`;
