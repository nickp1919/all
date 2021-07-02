const fileToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    if (file?.type) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    } else {
      resolve('');
    }
  });

export default fileToBase64;
