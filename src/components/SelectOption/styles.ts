import styled from "styled-components";

export const Container = styled.div<{selected: boolean;}> `
    display: flex;
    border: 2px solid ${props => props.selected ? '#25CD89' : '#16195C'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid #496459;
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
    color: #B8B8D4;
`;