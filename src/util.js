export const debounce = (callback, delay=1000) => {
   var time
    return(...args) => {
        clearTimeout(time);
        time = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}