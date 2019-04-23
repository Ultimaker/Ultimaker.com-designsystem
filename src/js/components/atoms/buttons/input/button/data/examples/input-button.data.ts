const data = {
    default: {
        className: '',
        text: 'input button default',
    },
    primary: {
        className: 'button--primary',
        text: 'input button primary',
    },
    secondary: {
        className: 'button--secondary',
        text: 'input button secondary',
    },
};

export default type => data[type];
