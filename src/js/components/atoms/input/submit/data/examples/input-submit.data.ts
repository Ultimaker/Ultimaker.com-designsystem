const data = {
    default: {
        className: '',
        text: 'input submit default',
    },
    primary: {
        className: 'button--primary',
        text: 'input submit primary',
    },
    secondary: {
        className: 'button--secondary',
        text: 'input submit secondary',
    },
};

export default type => data[type];
