import { DataType } from "./types";

const getColor = (item: DataType, previousItem: DataType): string => {
    const checkValue = (valueName: keyof DataType) => {
        switch (true) {
            case previousItem === undefined || item[valueName] === previousItem[valueName]:
                return '#155769';
            default:
                return item[valueName] < previousItem[valueName] ? 'red' : 'green';
        }
    };
    const color: string = checkValue('price');

    return color;
};

export default getColor;