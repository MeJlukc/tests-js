const capitalize = (str) => {
    if (str === '') return '';

    const firstChar = str[0].toUpperCase();
    const restSubstring = str.slice(1);
    return `${firstChar}${restSubstring}`;
};

export { capitalize };