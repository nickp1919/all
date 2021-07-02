function downloadByUrl({ name, link, API }) {
    const a = document.createElement('a');
    const type = name.slice(name.lastIndexOf('.') + 1);
    a.setAttribute('download', `${name}`);
    // Detect Safari
    const ua = window.navigator.userAgent;
    const chromeAgent = ua.indexOf('Chrome') > -1;
    let safariAgent = ua.indexOf('Safari') > -1;
    if (chromeAgent && safariAgent) {
        safariAgent = false;
    }
    a.href = API.img + link;
    safariAgent ? (a.download = type) : (a.target = '_blank');
    document.body.appendChild(a);
    a.click();
    a.remove();
}
export default downloadByUrl;
