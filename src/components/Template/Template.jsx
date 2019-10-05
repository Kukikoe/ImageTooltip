import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ChildrenContainer, Link, TemplateWrapper } from './styles';

export const Template = props => {
    const { children } = props;

    return (
        <TemplateWrapper>
            <CssBaseline />
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Link to="/">Home</Link>
                    </Toolbar>
                </Container>
            </AppBar>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </TemplateWrapper>
    )
};