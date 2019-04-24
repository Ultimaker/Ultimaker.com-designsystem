export const data = {
    default: {
        className: '',
        text: 'button default',
    },
    primary: {
        className: 'button--primary',
        text: 'button primary',
    },
    secondary: {
        className: 'button--secondary',
        text: 'button secondary',
    },
};

export default type => data[type];
