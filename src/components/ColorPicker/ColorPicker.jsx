import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { CircleIcon, Picker, Wrapper } from './styles';

const propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
};

export const ColorPicker = props => {
    const { value, onChange, error } = props;
    const [isOpen, setIsOpen] = useState(false);
    const popperRef = useRef(null);

    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <Wrapper>
                <TextField
                    ref={popperRef}
                    error={error}
                    onChange={(e) => onChange(e.target.value)}
                    onClick={() => setIsOpen(true)}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    value={value}
                    label="Color"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CircleIcon value={value} />
                            </InputAdornment>
                        ),
                    }}
                />
                {isOpen && <Picker color={value} onChange={(color) => onChange(color.hex)} />}
            </Wrapper>
        </ClickAwayListener>
    );
};

ColorPicker.propTypes = propTypes;