const menu_wd = () => (innerWidth >= 800 ? "40%" : "100%")

const menu_bg_ani = gsap.fromTo(
    "#menu_bg", 
    { opacity: 0 },
    { opacity: 1, duration: 0.3, ease: "expo.out" }
)
const menu_bg_ani_rev = gsap.fromTo(
    "#menu_bg", 
    { opacity: 1 },
    { opacity: 0, duration: 0.3, ease: "expo.out" }
)

const menu_ani = gsap.fromTo(
    "#menu_list", 
    { width: 0 },
    { width: menu_wd(), duration: 0.7, ease: "expo.out" }
)

const menu_ani_rev = gsap.fromTo(
    "#menu_list", 
    { width: menu_wd() },
    { width: 0, duration: 0.7, ease: "expo.out" }
)

const toggle_menu = async () => {
    if (gsap.isTweening("#menu_bg") || gsap.isTweening("#menu_list")) return

    if ($("#menu_bg").css("display") === "none") {
        $("#menu_bg").show()
        $("#menu_list").show()
        await menu_bg_ani.seek(0).play()
        await menu_ani.seek(0).play()
    } else {
        await menu_ani_rev.seek(0).play()
        await menu_bg_ani_rev.seek(0).play()
        $("#menu_list").hide()
        $("#menu_bg").hide()
    }
}

$("#menu_bg").click(toggle_menu)

$("#menubt").click(toggle_menu)