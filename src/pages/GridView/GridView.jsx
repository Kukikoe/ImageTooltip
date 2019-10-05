import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Delete from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import { Template } from '../../components/Template';
import { selectorImages, actionDeleteImageRequest } from '../../store';
import { Card, Typography, CardMedia, Container, DeleteButton } from './styles';
import { Fab } from '../../styles';

export const GridView = () => {
    const images = useSelector(selectorImages, shallowEqual);

    const dispatch = useDispatch();

    return (
        <Template>
            <Container>
                <Typography variant="h5">All Images</Typography>
                <Grid
                    container
                    spacing={4}
                >
                {images.map(image => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={image.id}>
                            {image.url &&
                                <Card>
                                    <CardMedia image={image.url} component={Link} to={`/image/${image.id}`} />
                                    <DeleteButton onClick={() => dispatch(actionDeleteImageRequest(image.id))}>
                                        <Delete />
                                    </DeleteButton>
                                </Card>
                            }
                        </Grid>
                    );
                    })
                }
                </Grid>
            </Container>
            <Fab color="primary" component={Link} to="/add">
                <AddIcon />
            </Fab>
        </Template>
    )
};