import styled from "styled-components";

export const Container = styled.div `
    p{
        font-size: 13px;
        color: #5B8291;
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
        margin-left: 2rem;
        input{
            display: block;
            margin-top: 7px;
            padding-left: 2rem;
            box-sizing: border-box;
            font-size: 1.5rem;
            width: 100%;
            height: 60px;
            border: 0;
            border-radius: 2rem;
            color: #2E424D;
            box-shadow: inset 10px 10px 15px #c7c8c9,
            inset -10px -10px 15px #ffffff;
            outline: 0;
            font-size: 15px;
            background-color: #EAEBED;
        }
    }

    button{
        background-color: #98DAD9;
        color: #2E424D;
        font-size: 14px;
        box-shadow:  21px 21px 33px #c7c8c9,
             -21px -21px 33px #ffffff;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
`;