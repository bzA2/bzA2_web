import { change_theme } from "./theme.js"

const get_theme = () => document.documentElement.getAttribute("theme") === "light"

// 注：因为主页这里换主题不仅换配色，还得重新换图标
const on_change_theme = () => {
    change_theme()
}

const typed = new Typed('.names_typed', {
    stringsElement: '.types_names',
    typeSpeed: 120,
    loop: true,
    cursorChar: ''
})

$(document).ready(async () => {
    $("#loading").hide()
    $("#home").show()
})

$("#themebtn").click(on_change_theme)