import { Link as LinkRR } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

export const Link = styled(LinkRR)`
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    
    :hover {
      opacity: 0.6;
    }
`;

export const TemplateWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const ChildrenContainer = styled(Container)`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;