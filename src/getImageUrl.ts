// на платформе используется undefined для отрисовки заглушки
const getImageUrl = (API: any, imageUrl: string | undefined) => {
  return imageUrl ? `${API.img}${imageUrl}` : undefined;
};

export default getImageUrl;
