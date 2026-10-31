import { get_data } from "./get_data.js"
import { change_theme } from "./theme.js"

let data = []

// 加载日志数据
const load = async () => {
    const res = await get_data("logs")
    data = (res.logs ? res.logs : []) 
    console.log(data)

    // 将数据遍历渲染到页面
    const log_con = document.getElementById("log_container")
    data.forEach(log => {
        const template = document.getElementById("log_template")
        const content = template.content.cloneNode(true)
        content.querySelector(".logs > .log_date").innerText = log.date
        content.querySelector(".logs > .log_content").innerText = log.content
        log_con.appendChild(content)
    })
}

$(document).ready(async () => {
    await load()
    $("#loading").hide()
    $("#log_page").show()
})

// 检测主题切换按钮
$("#themebtn").click(change_theme)