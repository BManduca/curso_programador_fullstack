function doChange() {
    alert(event.target.value)
}

/*
teste

let sampleInput = document.querySelector("input[name='sample-input']")

sampleInput.addEventListener("change", doChange)

let changeEvent = new Event("change")

sampleInput.dispatchEvent(changeEvent)

sampleInput.removeEventListener("change", doChange)
*/