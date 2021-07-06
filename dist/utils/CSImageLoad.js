export default async function CSImageLoad(src, options) {
    const { onReady, onLoadStart, onError } = options;
    try {
        if (onLoadStart) {
            onLoadStart();
        }
        const reader = new FileReader();
        const response = await fetch(src);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const blob = await response.blob();
        reader.onloadend = function () {
            onReady(this.result);
        };
        reader.readAsDataURL(blob);
    }
    catch (error) {
        if (onError) {
            onError(error);
        }
    }
}
