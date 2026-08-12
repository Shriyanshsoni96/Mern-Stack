// function debounce(func, delay) {
//     let timer;

//     return function () {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             func();
//         }, delay);
//     };
// }

// function search() {
//     console.log("API Call");
// }

// const debouncedSearch = debounce(search, 500);

// debouncedSearch();

// debounce meaning -> "Kaam tab karo jab user ne kuch time ke liye kaam karna band kar diya."
// Throttle->"Kaam baar-baar ho sakta hai, but fixed interval se zyada frequently nahi."

// function throttle(func, delay) {
//     let lastTime = 0;

//     return function () {
//         const currentTime = Date.now();

//         if (currentTime - lastTime >= delay) {
//             func();
//             lastTime = currentTime;
//         }
//     };
// }
// function handleScroll() {
//     console.log("Scrolling...");
// }

// const throttledScroll = throttle(handleScroll, 1000);

// window.addEventListener("scroll", throttledScroll);