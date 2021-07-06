import { navigate } from '@reach/router';
export const navigator = (NAVIGATE, url, anotherUrl) => {
    let URL = NAVIGATE.baseUrl + url;
    if (anotherUrl) {
        URL = anotherUrl + url;
    }
    return navigate(URL);
};
export default navigator;
