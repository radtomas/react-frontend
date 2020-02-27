import styled from "styled-components";

export const Wrapper = styled.div`
    color: ${props => props.theme.color || "black"};
    background-color: ${props => props.theme.backgroundColor || "white"};
`;

export const Div = styled.div`
    margin-top: ${props => props.mt || "0"};
    margin-bottom: ${props => props.mb || "0"};
    margin-left: ${props => props.ml || "0"};
    margin-right: ${props => props.mr || "0"};
    
    padding-top: ${props => props.pt || "0"};
    padding-bottom: ${props => props.pb || "0"};
    padding-left: ${props => props.pl || "0"};
    padding-right: ${props => props.pr || "0"};
`;

export const Container = styled(Div)`
    display: flex;
    justify-content: ${props => props.jc || "normal"};
    align-items: ${props => props.ai || "normal"};
    flex-direction: ${props => props.fd || "row"};
`;

export const Col = styled(Div)`
  
`;