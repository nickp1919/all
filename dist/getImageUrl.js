// на платформе используется undefined для отрисовки заглушки
const getImageUrl = (API, imageUrl) => {
    return imageUrl ? `${API.img}${imageUrl}` : undefined;
};
export default getImageUrl;
