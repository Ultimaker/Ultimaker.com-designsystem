export const data = {
    default: {
        buttonAriaLabel: 'icon button default',
        buttonClass: '',
        iconName: 'search',
        slot: 'icon button default',
    },
    defaultNoSlot: {
        buttonAriaLabel: 'icon button default, no slot',
        buttonClass: '',
        iconName: 'search',
        slot: '',
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
        slot: '',
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
        slot: '',
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
        slot: '',
    },
    reversed: {
        buttonAriaLabel: 'if you press this button your life will be better',
        buttonClass: 'icon-button--reversed',
        iconName: 'search',
        slot: 'icon button default',
    },
    visuallyHiddenLabel: {
        buttonAriaLabel: 'if you press this button your life will be better',
        buttonClass: 'icon-button--visually-hidden-label',
        iconName: 'search',
        slot: 'icon button default',
    },
};

export default type => data[type];
