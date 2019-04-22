const data = {
    default: {
        className: '',
        text: 'anchor button default',
    },
    primary: {
        className: 'button--primary',
        text: 'anchor button primary',
    },
    secondary: {
        className: 'button--secondary',
        text: 'anchor button secondary',
    },
};

export default type => data[type];
