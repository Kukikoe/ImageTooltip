export const selectorImages = state => state.images;

export const selectorGetImage = id => state => state.images.find(image => image.id === id);
