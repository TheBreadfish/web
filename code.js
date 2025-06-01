console.log("breafish code :3")

const navBar = document.getElementById("navbar")
const langRegex = window.location.pathname.match(/^.*\/web\/(?:(de)\/|)?(.*)$/)
const currentPage = (langRegex[2]==""?"index.html":langRegex[2])
const langCode = (langRegex[1]==undefined?"en":langRegex[1])
const dividerList = document.getElementsByClassName("divider")
if (navBar == null) { throw new Error("navigation bar not found D:") }

const navBarItems = {
    en: [
        {name: "about", href: "#about"},
        {name: "links", href: "#links"},
        {name: "contact", href: "#contact"},
        {name: "resources", href: "#resources"}
    ],
    de: [
        {name: "über", href: "#über"},
        {name: "links", href: "#links"},
        {name: "kontakt", href: "#kontakt"},
        {name: "ressourcen", href: "#ressourcen"}
    ]
}

const footerText = {
    en: `website made by thebreadfish <br> also available in <a href="de/index.html">🇩🇪</a><br><br><i>Copyright © 2025 TheBreadFish, all rights reserved.</i>`,
    de: `website hergestellt von thebreadfish <br> auch verfügbar auf <a href="../index.html">🇬🇧</a><br><br><i>Copyright © 2025 TheBreadFish, all rights reserved.</i>`
}

const footer = document.getElementById("footer")
if (footer == null) { throw new Error("footer not found D:)") }
footer.innerHTML = footerText[langCode]
for (let i = 0; i < dividerList.length; i++) {
    dividerList[i].addEventListener("animationend", () => {
        dividerList[i].classList.remove("fade")
    })
}

if (currentPage == "index.html") {
    for (let i = 0; i < navBarItems[langCode].length; i++) {
        let pageString = navBarItems[langCode][i].name
        let pageHref = navBarItems[langCode][i].href

        let navBarElement = document.createElement("a")
        navBar.appendChild(navBarElement)

        navBarElement.innerText = `${pageString}`
        navBarElement.href = pageHref
        navBarElement.addEventListener("click", () => {
            for (let i = 0; i < dividerList.length; i++) {
                dividerList[i].classList.remove("fade")
                dividerList[i].style.animation = ""
                dividerList[i].offsetHeight
                dividerList[i].style.animation = null
                dividerList[i].classList.add("fade")
            }
            document.getElementById(pageHref.replace("#", "")).classList.remove("fade")
        })

        if (navBarItems[langCode][i+1] != null) {
            let spanSeparator = document.createElement("span")
            spanSeparator.innerText = ` - `
            navBar.appendChild(spanSeparator)
        }
    }
} else {
    let navBarElement = document.createElement("a")
    navBar.appendChild(navBarElement)
    navBarElement.innerText = "☆ home ☆"
    navBarElement.href = "index.html"
}