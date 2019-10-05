import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import shallowEqual from 'react-redux/es/utils/shallowEqual';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { selectorGetImage } from '../../store/selectors';
import { Template } from '../../components/Template';
import { Tooltip } from '../../components/Tooltip';
import { Typography, Fab } from '../../styles';
import { Img, ImgWrapper } from './styles';

const propTypes = {
    match: PropTypes.object,
};

export const ImageView = props => {
    const { match: { params } } = props;

    const image = useSelector(selectorGetImage(params.id), shallowEqual);

    return (
        <Template>
            <Box display="flex" alignItems="center" alignSelf="center">
                <IconButton component={Link} to="/">
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5">Image</Typography>
            </Box>
            <ImgWrapper>
                <Tooltip placement={image.position} color={image.color} content={image.text}>
                    <Img src={image.url} />
                </Tooltip>
            </ImgWrapper>
            <Fab color="primary" component={Link} to={`/update/${image.id}`}>
                <EditIcon />
            </Fab>
        </Template>
    )
};

ImageView.propTypes = propTypes;