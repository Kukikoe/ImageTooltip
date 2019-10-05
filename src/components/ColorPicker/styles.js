import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

export const CircleIcon = styled(FiberManualRecordIcon)`
    color: ${props => props.value};
`;

export const Wrapper = styled.div`
    width: 100%;
`;

export const Picker = styled(SketchPicker)`
    position: absolute;
    z-index: 100;
`;
