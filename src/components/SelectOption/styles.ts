import styled from "styled-components";

export const Container = styled.div<{selected: boolean;}> `
    display: flex;
    border: ${props => props.selected ? '2px solid #98DAD9' : '0px'};
    box-shadow: inset 9px 9px 11px #c7c8c9,
    inset -9px -9px 11px #ffffff;
    border-radius: 2rem;
    padding: 1rem 0;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
    margin-right: 10px;
    
    &:hover {
        border: 2px solid #98DAD9;
    }
`;

export const Info = styled.div `
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div `
    font-size: 17px;
    margin-bottom: 7px;
    font-weight: bold;
`;

export const Description = styled.div `
    font-size: 14px;
    color: #5B8291;
`;