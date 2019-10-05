import FormControlMui from '@material-ui/core/FormControl';
import ContainerMui from '@material-ui/core/Container';
import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const FormControl = styled(FormControlMui)`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const ImageContainer = styled.div`
  height: 100px;
  width: 100px;
  margin-right: 20px;
  border: 1px solid ${props => props.error ? 'red' : '#d3d3d3'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const Text = styled.span``;

export const ButtonWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
`;

export const Container = styled(ContainerMui)`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;