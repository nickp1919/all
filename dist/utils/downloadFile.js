import Axios from 'axios';
import { Notificator } from "./";
export default function downloadFile({ fetchUrl, setDisabled, fileName, type, }) {
    if (setDisabled) {
        setDisabled(true);
    }
    Axios.get(`${fetchUrl}`, {
        responseType: 'blob',
    })
        .then(({ data }) => {
        if (setDisabled) {
            setDisabled(false);
        }
        const url = window.URL.createObjectURL(new Blob([data]));
        const a = document.createElement('a');
        a.setAttribute('download', `${fileName}`);
        // Detect Safari
        const ua = window.navigator.userAgent;
        const chromeAgent = ua.indexOf('Chrome') > -1;
        let safariAgent = ua.indexOf('Safari') > -1;
        if (chromeAgent && safariAgent)
            safariAgent = false;
        a.href = url;
        safariAgent ? (a.download = type) : (a.target = '_blank');
        document.body.appendChild(a);
        a.click();
        a.remove();
    })
        .catch(() => {
        Notificator.error('Ошибка загрузки файла!');
    });
}
