import { HttpRequest } from '@hrplatform/utils';
const http = new HttpRequest(process.env.APP_HOST, {});
export const uploadFile = (body, params) => http.post('file/upload', body, params);
export default uploadFile;
