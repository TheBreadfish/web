console.log("breafish code :3")

const navBar = document.getElementById("navbar")
const currentPage = (window.location.pathname.replace("/web/", "")==""?"index.html":window.location.pathname.replace("/web/", ""))
if (navBar == null) { throw new Error("navigation bar not found D:") }
const navBarItems = [
    "index", "contact", "resources"
]
const footer = document.getElementById("footer")
if (footer == null) { throw new Error("footer not found D:)") }
const footerText = `website made by thebreadfish; <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow">cc by 4.0</a>`
footer.innerHTML = footerText

let navBarString = ""
for (let i = 0; i < navBarItems.length; i++) {
    // won't work local :(
    let pageString = navBarItems[i]
    let pageURL = `${pageString}.html`
    if (currentPage == pageURL) {
        pageString = `[${navBarItems[i]}]`
    }

    navBarString += `<a href="${pageURL}">${pageString}</a>`
    if (navBarItems[i+1] != null) {
        navBarString += " - "
    }
}
// if (!navBarItems.includes(currentPage.replace(".html",""))) {
//     navBarString += ` -- <a onclick="history.back()">{☜}</a>`
// }
navBar.innerHTML = navBarString


if (currentPage == "contact.html") {
    var currentTimeSpan = document.getElementById("current_time")
    if (currentTimeSpan == null) { throw new Error("current_time not found")}

    updateTimeSec()
}

function updateTimeSec() {
    if (currentTimeSpan == null) { return }
    let options = {
    weekday: "long",
    hour: "numeric", minute: "numeric"
    }
    let formatter = new Intl.DateTimeFormat([], options)

    newTime = `${formatter.format(new Date())}`

    if (currentTimeSpan.innerText != newTime) {
        currentTimeSpan.innerText = newTime
        setTimeout(updateTimeMin, 60000)
    } else {
        setTimeout(updateTimeSec, 1000)
    }
}

function updateTimeMin() {
    if (currentTimeSpan == null) { return }
    let options = {
    weekday: "long",
    hour: "numeric", minute: "numeric"
    }
    let formatter = new Intl.DateTimeFormat([], options)

    newTime = `${formatter.format(new Date())}`
    currentTimeSpan.innerText = newTime

    setTimeout(updateTimeMin, 60000)
}