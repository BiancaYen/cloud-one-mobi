const getTheme = (section, defaultValue = '#CCC') => property => ({ theme = {} } = {}) => {
    const field = theme[section] || {};

    if (typeof field === 'string') {
        return field;
    }

    return field[property] || defaultValue;
};

export default getTheme;
