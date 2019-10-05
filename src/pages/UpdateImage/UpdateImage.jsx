import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import shallowEqual from 'react-redux/es/utils/shallowEqual';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Template } from '../../components/Template';
import { ImageForm } from '../../components/ImageForm';
import { actionUpdateImageRequest, selectorGetImage } from '../../store';
import { Typography } from '../../styles';


const propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
};

export const UpdateImage = props => {
    const { match: { params }, history } = props;

    const image = useSelector(selectorGetImage(params.id), shallowEqual);
    const dispatch = useDispatch();

    const update = (obj) => {
        dispatch(actionUpdateImageRequest({...obj, id: params.id }));
        history.push(`/image/${image.id}`);
    };

    return (
        <Template>
            <Box display="flex" alignItems="center" alignSelf="center">
                <IconButton component={Link} to={`/image/${image.id}`}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5">Update Image</Typography>
            </Box>
            <ImageForm img={image} handleSubmit={update} buttonName="Update"/>
        </Template>
    )
};

UpdateImage.propTypes = propTypes;