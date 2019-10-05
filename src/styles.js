import TypographyMui from '@material-ui/core/Typography/Typography';
import FabMui from '@material-ui/core/Fab/Fab';
import styled from 'styled-components';

export const Typography = styled(TypographyMui)`
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
`;

export const Fab = styled(FabMui)`
    position: fixed;
    bottom: 40px;
    right: 40px;
`;
