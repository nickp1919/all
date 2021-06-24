function debounceFn(fn: Function, timeout = 300) {
  let timer: any = null;

  return function (...args: any[]) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
}

export default debounceFn;
