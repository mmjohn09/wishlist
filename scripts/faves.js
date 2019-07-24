const container = document.querySelector("#favoritesList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const wishlistItem = document.querySelector("#wishlistItem").value
    const location = document.querySelector("#location").value
    const message = `I can purchase ${wishlistItem} at ${location}`

    document.querySelector("#wishlistItem").value = ""
    document.querySelector("#location").value = ""
    document.querySelector("#wishlistItem").focus()

    isEmpty(wishlistItem, location)

}
)

function isEmpty(wishlistItem, location) {
    if (wishlistItem === "" || location === "") 
        alert("response required")
    else (container.innerHTML += `<section>I can purchase ${wishlistItem} at ${location} </section>`
        )}
    





