import { API } from '@constants-lib';

// на платформе используется undefined для отрисовки заглушки
const getImageUrl = (imageUrl: string | undefined) => {
  return imageUrl ? `${API.img}${imageUrl}` : undefined;
};

export default getImageUrl;
