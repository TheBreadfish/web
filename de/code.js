console.log("breafish code :3")

const navBar = document.getElementById("navbar")
const currentPage = (window.location.pathname.replace("de/web/", "")==""?"index.html":window.location.pathname.replace("de/web/", ""))
if (navBar == null) { throw new Error("navigation bar not found D:") }
const navBarItems = [
    "index", "kontakt", "ressourcen"
]
const footer = document.getElementById("footer")
if (footer == null) { throw new Error("footer not found D:)") }
const footerText = `website hergestellt von thebreadfish; <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow">cc by 4.0</a><br> auch verfügbar auf <a href="../index.html">🇬🇧</a>`
footer.innerHTML = footerText
const dateOptions = {
    weekday: "long",
    hour: "numeric", minute: "numeric"
}

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


if (currentPage == "de/kontakt.html") {
    var currentTimeSpan = document.getElementById("current_time")
    if (currentTimeSpan == null) { throw new Error("current_time not found")}

    updateTimeSec()
}

function updateTimeSec() {
    if (currentTimeSpan == null) { return }
    let formatter = new Intl.DateTimeFormat([], dateOptions)

    newTime = `${formatter.format(new Date())}`
    if (currentTimeSpan.innerText == "") {
        currentTimeSpan.innerText = newTime
    }

    if (currentTimeSpan.innerText != newTime) {
        currentTimeSpan.innerText = newTime
        setTimeout(updateTimeMin, 60000)
    } else {
        setTimeout(updateTimeSec, 1000)
    }
}

function updateTimeMin() {
    if (currentTimeSpan == null) { return }
    let formatter = new Intl.DateTimeFormat([], dateOptions)

    newTime = `${formatter.format(new Date())}`
    currentTimeSpan.innerText = newTime

    setTimeout(updateTimeMin, 60000)
}