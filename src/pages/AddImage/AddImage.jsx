import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';

import { Template } from '../../components/Template';
import { actionAddImageRequest } from '../../store';
import { ImageForm } from '../../components/ImageForm';
import { Typography } from '../../styles';
import { Content, SnackbarContent, Text } from './styles';

export const AddImage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const add = (obj) => {
        dispatch(actionAddImageRequest({ id: uuidv4(), ...obj }));
        setIsOpen(true);
    };

    const onClose = () => setIsOpen(false);

    return (
        <Template>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                open={isOpen}
                autoHideDuration={3000}
                onClose={onClose}
            >
                <SnackbarContent
                    message={<Content><CheckCircleIcon/><Text>Success</Text></Content>}
                    action={[
                        <IconButton
                            key="close"
                            color="inherit"
                            onClick={onClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </Snackbar>
            <Box display="flex" alignItems="center" alignSelf="center">
                <IconButton component={Link} to="/">
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5">Add Image</Typography>
            </Box>
            <ImageForm handleSubmit={add} buttonName="Add" resetOnSubmit/>
        </Template>
    )
};