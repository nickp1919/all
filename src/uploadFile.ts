import { IRequestParams, HttpRequest } from '@hrplatform/utils';

const http = new HttpRequest(process.env.APP_HOST, {});

export const uploadFile = (body: FormData, params?: IRequestParams): Promise<string> =>
  http.post<string, FormData>('file/upload', body, params);

export default uploadFile;
