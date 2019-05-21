export const data = {
    default: {
        buttonAriaLabel: 'icon button default',
        iconName: 'search',
        slot: 'icon button default',
        type: 'button',
    },
    defaultNoSlot: {
        buttonAriaLabel: 'icon button default, no slot',
        iconName: 'search',
        type: 'button',
    },
    large: {
        buttonAriaLabel: 'icon button large',
        buttonClass: 'icon-button--large',
        iconName: 'search',
        slot: 'icon button large',
        type: 'button',
    },
    largeNoSlot: {
        buttonAriaLabel: 'icon button large, no slot',
        buttonClass: 'icon-button--large',
        iconName: 'search',
        type: 'button',
    },
    small: {
        buttonAriaLabel: 'icon button small',
        buttonClass: 'icon-button--small',
        iconName: 'search',
        slot: 'icon button small',
        type: 'button',
    },
    smallNoSlot: {
        buttonAriaLabel: 'icon button small, no slot',
        buttonClass: 'icon-button--small',
        iconName: 'search',
        type: 'button',
    },
    underline: {
        buttonAriaLabel: 'icon button underline-large',
        buttonClass: 'icon-button--underline-large',
        iconName: 'search',
        slot: 'icon button underline',
        type: 'button',
    },
    underlineNoSlot: {
        buttonAriaLabel: 'icon button underline-large, no slot',
        buttonClass: 'icon-button--underline-large',
        iconName: 'search',
        type: 'button',
    },
    disabled: {
        buttonAriaLabel: 'angle left',
        iconName: 'angle-left',
        slot: 'angle left',
        disabled: true,
        type: 'button',
    },
    disabledNoSlot: {
        buttonAriaLabel: 'angle left',
        iconName: 'angle-left',
        disabled: true,
        type: 'button',
    },
    submitButton: {
        buttonAriaLabel: 'submit button',
        iconName: 'angle-right',
        slot: 'submit button',
        type: 'submit',
    },
    submitButtonNoSlot: {
        buttonAriaLabel: 'submit button',
        iconName: 'angle-right',
        type: 'submit',
    },
};

export default type => data[type];
