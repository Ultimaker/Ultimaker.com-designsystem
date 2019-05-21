export const data = {
    default: {
        buttonAriaLabel: 'icon button default',
        iconName: 'search',
        slot: 'icon button default',
    },
    defaultNoSlot: {
        buttonAriaLabel: 'icon button default, no slot',
        iconName: 'search',
    },
    large: {
        buttonAriaLabel: 'icon button large',
        buttonClass: 'icon-button--large',
        iconName: 'search',
        slot: 'icon button large',
    },
    largeNoSlot: {
        buttonAriaLabel: 'icon button large, no slot',
        buttonClass: 'icon-button--large',
        iconName: 'search',
    },
    small: {
        buttonAriaLabel: 'icon button small',
        buttonClass: 'icon-button--small',
        iconName: 'search',
        slot: 'icon button small',
    },
    smallNoSlot: {
        buttonAriaLabel: 'icon button small, no slot',
        buttonClass: 'icon-button--small',
        iconName: 'search',
    },
    underline: {
        buttonAriaLabel: 'icon button underline-large',
        buttonClass: 'icon-button--underline-large',
        iconName: 'search',
        slot: 'icon button underline',
    },
    underlineNoSlot: {
        buttonAriaLabel: 'icon button underline-large, no slot',
        buttonClass: 'icon-button--underline-large',
        iconName: 'search',
    },
    disabled: {
        buttonAriaLabel: 'angle left',
        iconName: 'angle-left',
        slot: 'angle left',
        disabled: true,
    },
    disabledNoSlot: {
        buttonAriaLabel: 'angle left',
        iconName: 'angle-left',
        disabled: true,
    },
};

export default type => data[type];
