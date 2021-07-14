const fileToBase64 = (file) => new Promise((resolve, reject) => {
    if (file === null || file === void 0 ? void 0 : file.type) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    }
    else {
        resolve('');
    }
});
export default fileToBase64;
