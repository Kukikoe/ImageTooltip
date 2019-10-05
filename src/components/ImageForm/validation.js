export const validation = ({ text, image, color }) => {
    const errors = {};

    if (text === '') {
        errors.text = true;
    }
    if (!Object.keys(image).length) {
        errors.image = true;
    }
    if (!color.match("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")) {
        errors.color = true;
    }

    return errors;
};