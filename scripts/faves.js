const container = document.querySelector("#favoritesList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const wishlistItem = document.querySelector("#wishlistItem").value
    const location = document.querySelector("#location").value
    const message = `I can purchase ${wishlistItem} at ${location}`

    const clearItem = document.querySelector("#wishlistItem").value = ""
    const clearLocation = document.querySelector("#location").value = ""

    console.log(message)

    container.innerHTML += `<section>I can purchase ${wishlistItem} at ${location} </section>`


}
)





