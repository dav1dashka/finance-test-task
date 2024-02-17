const getColor = (item, previousItem) => {
    const checkValue = (valueName) => {
        switch (true) {
            case previousItem === undefined || item[valueName] === previousItem[valueName]:
                return '#155769';
            default:
                return item[valueName] < previousItem[valueName] ? 'red' : 'green';
        }
    };
    const color = checkValue('price');

    return color;
};

export default getColor;