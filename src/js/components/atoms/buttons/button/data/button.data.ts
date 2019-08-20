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
    small: {
        className: 'button--small',
        text: 'button small',
    },
    transparent: {
        className: 'button--transparent',
        text: 'button transparent',
    },
};

export default type => data[type];
