const colors = {
    black: '#0D1321',
    error: '#FF2525',
    neutral: '#E2E2E2',
    neutralShade: '#9F9F9F',
    neutralTint: '#F4F4F4',
    primary: '#19C1C6',
    primaryShade: '#159EA3',
    primaryTint: '#96E2E5',
    secondary: '#4062BB',
    success: '#4ac471',
    white: '#FFF'
};

const theme = {
    // Colors
    errorColor: colors.error,
    successColor: colors.success,
    // Components
    arrowToggle: {
        color: colors.neutral,
        colorActive: colors.primary,
        colorDisabled: colors.neutralTint
    },
    button: {
        color: colors.white,
        colorDisabled: colors.white,
        background: colors.primary,
        backgroundDisabled: colors.primaryTint,
        backgroundHover: colors.primaryShade,
        loaderColor: colors.white
    },
    buttonOutlined: {
        color: colors.neutralShade,
        colorDisabled: colors.neutralTint,
        border: colors.primary,
        borderDisabled: colors.neutral,
        background: colors.white,
        backgroundDisabled: colors.white,
        backgroundHover: colors.primaryTint,
        loaderColor: colors.primary
    },
    card: {
        actionBackgroundHover: colors.neutralTint,
        actionColor: colors.secondary,
        headingColor: colors.black,
        headingBorderColor: colors.neutralShade
    },
    checkbox: {
        background: colors.white,
        backgroundChecked: colors.primary,
        backgroundCheckedDisabled: colors.primaryTint,
        backgroundDisabled: colors.neutralTint,
        border: colors.neutral,
        borderDisabled: colors.neutralTint
    },
    header: {
        background: colors.primary,
        backgroundAccent: colors.secondary,
        color: colors.white
    },
    input: {
        background: colors.white,
        backgroundFocused: colors.neutralTint,
        border: colors.neutral,
        borderFocused: colors.secondary,
        caretColor: colors.secondary,
        color: colors.neutralShade,
        colorDisabled: colors.neutral,
        placeholder: colors.neutral,
        placeholderDisabled: colors.neutral
    },
    label: {
        color: colors.neutralShade
    },
    layout: {
        background: colors.neutral
    },
    list: {
        itemActionColor: colors.primary,
        itemActionColorHover: colors.primaryShade,
        itemBackground: colors.neutralTint,
        itemColor: colors.neutralShade,
        itemSubtitleColor: colors.primaryTint,
        itemTitleColor: colors.neutralShade
    },
    searchInput: {
        background: colors.neutralTint,
        backgroundDisabled: colors.neutralTint,
        border: colors.neutral,
        borderDisabled: colors.neutral,
        borderFocused: colors.neutral,
        caretColor: colors.primary,
        color: colors.neutralShade,
        colorDisabled: colors.neutral,
        colorLoading: colors.neutral,
        iconColor: colors.primary,
        iconColorDisabled: colors.neutral,
        placeholder: colors.neutral,
        placeholderDisabled: colors.neutral,
        searchUrlColor: colors.neutral
    },
    select: {
        background: colors.white,
        backgroundReadOnly: colors.neutral,
        border: colors.neutral,
        borderActive: colors.primary,
        color: colors.neutralShade,
        colorDisabled: colors.neutral,
        counterColor: colors.primary,
        counterBackground: colors.white,
        counterBorderColor: colors.neutral,
        dropdownBackground: colors.white,
        placeholder: colors.neutral
    },
    selectRow: {
        backgroundFocused: colors.neutral,
        backgroundHover: colors.neutralTint,
        border: colors.neutral,
        color: colors.neutralShade,
        colorActive: colors.secondary,
        colorDisabled: colors.neutral
    },
    validationError: {
        color: colors.error
    }
};

export default theme;
