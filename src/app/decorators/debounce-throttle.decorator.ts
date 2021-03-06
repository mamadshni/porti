export function debounce_or_throttle(
  wait: number = 1000,
  immediate = true,
  limit = 0
): MethodDecorator {
  // ref: https://css-tricks.com/debouncing-throttling-explained-examples/
  // ref: https://stackoverflow.com/a/35527852
  // ref@comment@jcdsr: https://plnkr.co/edit/3J0dcDaLTJBxkzo8Akyg?p=preview
  // ref: https://kanboo.github.io/2018/05/03/JS-debounce-throttle
  return (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const origFunc = descriptor.value;
    let timerID: number = null;
    let startTime: number = null;
    /** Use throttle if `0 < limit < wait`; otherwise, use debounce instead */
    if (0 < limit && limit < wait) {
      descriptor.value = function _dummy(this: any, ...args: any[]) {
        // discard old event timer
        clearTimeout(timerID);
        const currentTime: number = new Date().getTime();

        // set up throttle (the first one or the new one after waiting time)
        if (timerID === null) {
          startTime = currentTime;
          if (immediate === true) {
            origFunc.apply(this, args);
          }
        }

        // check if $limit exceeded (discard the old waiting timer)
        if (currentTime - startTime >= limit) {
          startTime = currentTime;
          origFunc.apply(this, args);
        } else {
          timerID = setTimeout(() => {
            if (immediate === false) {
              origFunc.apply(this, args);
            }
            timerID = null;
          }, wait);
        }
      };
    } else {
      descriptor.value = function _dummy(this: any, ...args: any[]) {
        clearTimeout(timerID);
        if (timerID === null) {
          if (immediate === true) {
            origFunc.apply(this, args);
          }
        }
        timerID = setTimeout(() => {
          if (immediate === false) {
            origFunc.apply(this, args);
          }
          timerID = null;
        }, wait);
      };
    }
    return descriptor;
  };
}
