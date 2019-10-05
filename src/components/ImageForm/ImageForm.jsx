import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { ColorPicker } from '../ColorPicker';
import { validation } from './validation';
import { Container, Img, Text, ButtonWrapper, FormControl, ImageContainer, UploadWrapper } from './styles';

const propTypes = {
    img: PropTypes.object,
    buttonName: PropTypes.string,
    handleSubmit: PropTypes.func,
    resetOnSubmit: PropTypes.bool,
};

export const ImageForm = props => {
    const { img, buttonName, handleSubmit, resetOnSubmit } = props;

    const [image, setImage] = useState(() => img || {});
    const [color, setColor] = useState(() => img ? img.color : '#000');
    const [text, setText] = useState(() => img ? img.text : '');
    const [position, setPosition] = useState(() => img ? img.position : 'top');
    const [errors, setErrors] = useState({});
    const [labelWidth, setLabelWidth] = useState(0);

    const inputLabel = useRef(null);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const upload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        if (file) {
            reader.onload = (e) => {
                setImage({ url: e.target.result, fileName: file.name });
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = () => {
        setErrors(validation({ text, image, color }));

       if (Object.keys(errors).length) {
           return;
       }

        handleSubmit({ ...image, color, text, position });

        if (resetOnSubmit) {
            setImage({});
            setColor('#000');
            setText('');
            setPosition('top');
        }
    };

    return (
        <Container maxWidth="sm">
            <UploadWrapper>
                <ImageContainer error={errors.image}>
                    {image.url ?
                        <Img src={image.url} alt={image.fileName}/>
                        :
                        <Text>Upload image</Text>
                    }
                </ImageContainer>
            <Button
                variant="contained"
                color="default"
                startIcon={<CloudUploadIcon />}
                component="label"
            >
                Upload
                <input
                    type="file"
                    accept='image/*'
                    style={{ display: "none" }}
                    onChange={(e) => upload(e)}
                />
            </Button>
            </UploadWrapper>
            <ColorPicker
                error={errors.color}
                value={color}
                onChange={(color) => setColor(color)}
            />
            <TextField
                error={errors.text}
                required
                id="outlined-required"
                label="Text"
                value={text}
                margin="normal"
                variant="outlined"
                onChange={(e) => setText(e.target.value)}
            />
            <FormControl variant="outlined">
                <InputLabel ref={inputLabel} htmlFor="outlined-position-native-simple">
                    Position
                </InputLabel>
                <Select
                    native
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'Position',
                        id: 'outlined-position-native-simple',
                    }}
                >
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </Select>
            </FormControl>
            <ButtonWrapper>
                <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={onSubmit}
                >
                    {buttonName}
                </Button>
            </ButtonWrapper>
        </Container>
    )
};

ImageForm.propTypes = propTypes;