function saveHouse() {
    let residenceNumber = document.querySelector("input[name='residence-number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value
    let houseArea = document.querySelector("input[name='house-area']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = "Número da residência: " + residenceNumber + " (" + neighborhood + " - " + city + " - " + houseArea + " m² )"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
       let liToRemove = button.parentNode
       document.getElementById("house-list").removeChild(liToRemove)
}