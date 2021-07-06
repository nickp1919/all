function moveElementArray(arr: any, from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
}

export default moveElementArray;
