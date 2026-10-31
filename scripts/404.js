let second = 10

$(window).ready(() => {
    const inter = setInterval(() => {
        if (second === 0) location.href = '/'
        document.querySelector(".sec").innerText = `(${second}s)`
        second--;
    }, 1000)
})