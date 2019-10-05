import SnackbarContentMui from '@material-ui/core/SnackbarContent/SnackbarContent';
import styled from 'styled-components';

export const SnackbarContent = styled(SnackbarContentMui)`
    background: #43a047;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.span`
    margin-left: 10px;
`;