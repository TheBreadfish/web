console.log("breafish code :3")

const navBar = document.getElementById("navbar")
const langRegex = window.location.pathname.match(/^.*\/web\/(?:(de)\/|)?(.*)$/)
const currentPage = (langRegex[2]==""?"index.html":langRegex[2])
const langCode = (langRegex[1]==undefined?"en":langRegex[1])
if (navBar == null) { throw new Error("navigation bar not found D:") }

const navBarItems = {
    en: [
        {name: "start", url: "index.html"},
        {name: "contact", url: "contact.html"},
        {name: "resources", url: "resources.html"}
    ],
    de: [
        {name: "anfang", url: "index.html"},
        {name: "kontakt", url: "kontakt.html"},
        {name: "ressourcen", url: "ressourcen.html"}
    ]
}

const footerText = {
    en: `website made by thebreadfish <br> also available in <a href="de/index.html">🇩🇪</a><br><br><i>Copyright © 2025 TheBreadFish, all rights reserved.</i>`,
    de: `website hergestellt von thebreadfish <br> auch verfügbar auf <a href="../index.html">🇬🇧</a><br><br><i>Copyright © 2025 TheBreadFish, all rights reserved.</i>`
}

const footer = document.getElementById("footer")
if (footer == null) { throw new Error("footer not found D:)") }
footer.innerHTML = footerText[langCode]
const dateOptions = {
    weekday: "long",
    hour: "numeric", minute: "numeric"
}

let navBarString = ""
for (let i = 0; i < navBarItems[langCode].length; i++) {
    let pageString = navBarItems[langCode][i].name
    let pageURL = navBarItems[langCode][i].url
    if (currentPage == pageURL) {
        pageString = `[${pageString}]`
    }

    navBarString += `<a href="${pageURL}">${pageString}</a>`
    if (navBarItems[langCode][i+1] != null) {
        navBarString += " - "
    }
}

navBar.innerHTML = navBarString


if (currentPage == "contact.html") {
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