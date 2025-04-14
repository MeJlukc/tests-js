const capitalize = (str) => {
    if (str === '') return '';
    if (str === undefined) return undefined;

    const firstChar = str[0].toUpperCase();
    const restSubstring = str.slice(1);
    return `${firstChar}${restSubstring}`;
};

export { capitalize };