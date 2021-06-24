// на платформе используется undefined для отрисовки заглушки
const getImageUrl = (imageUrl: string | undefined, API: any) => {
  return imageUrl ? `${API.img}${imageUrl}` : undefined;
};

export default getImageUrl;
