import CardMediaMui from '@material-ui/core/CardMedia';
import TypographyMui from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardMui from '@material-ui/core/Card';
import styled from 'styled-components';

export const CardMedia = styled(CardMediaMui)`
    height: 300px;
`;

export const Container = styled.div`
    margin-top: 20px;
`;

export const Typography = styled(TypographyMui)`
    margin-bottom: 20px;
`;

export const DeleteButton = styled(IconButton)`
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 3;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s;
    
    @media (min-width: 768px) {
      opacity: 0;
    }
`;

export const Card = styled(CardMui)`
    position: relative;
    
     &:hover ${DeleteButton} {
       opacity: 1;
     }
`;