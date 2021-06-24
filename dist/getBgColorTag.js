const getBgColorTag = (color) => {
    if (color.includes('tag')) {
        return color.substr(3, 2);
    }
    else {
        return color ? color : '01';
    }
};
export default getBgColorTag;
