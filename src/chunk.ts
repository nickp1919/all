const chunk = <T>(arr: T[] = [], chunkSize = 1, cache: T[] = []) => {
  const tmp: any = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) {
    cache.push(tmp.splice(0, chunkSize));
  }
  return cache;
};

export default chunk;
