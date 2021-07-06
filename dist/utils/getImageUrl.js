import { API } from '@constants';
// на платформе используется undefined для отрисовки заглушки
const getImageUrl = (imageUrl) => {
    return imageUrl ? `${API.img}${imageUrl}` : undefined;
};
export default getImageUrl;
