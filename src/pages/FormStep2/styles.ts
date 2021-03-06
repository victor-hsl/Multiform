import styled from "styled-components";

export const Container = styled.div `
    p{
        font-size: 13px;
        color: #B8B8D4;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #2E424D;
        margin: 30px 0;
    }

    label{
        font-size: 13px;
        
        input{
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            padding: 20xp 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
        }
    }

    button{
        background-color: #98DAD9;
        color: #2E424D;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        box-shadow:  8px 8px 16px #c7c8c9,
             -8px -8px 16px #ffffff;


    }

    .backButton {
        font-size: 12px;
        z-index: -1;
        text-decoration: none;
        padding: 1.2rem;
        padding-right: 4.5rem;
        padding-bottom: 1.1rem;
        color: #5B8291;
        margin-right: -60px;
        box-shadow:  8px 8px 16px #c7c8c9,
             -8px -8px 16px #ffffff;

        border-radius: 30px;
    }
`;