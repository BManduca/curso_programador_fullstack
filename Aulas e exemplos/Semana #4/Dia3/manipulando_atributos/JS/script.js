function verifyEnablement() {
    let selectedValue = document.querySelector("select").value
    if (selectedValue == "disabled") {
        document.querySelector("input[name='some-text']").disabled = true
        let pElementDisabled = document.getElementById("message")
        pElementDisabled.innerText = "DESABILITADO"
        pElementDisabled.classList.add("black-color")
        pElementDisabled.classList.add("red-background-color")
    } else {
        document.querySelector("input[name='some-text']").disabled = false
        let pElementEnabled = document.getElementById("message")
        pElementEnabled.innerText = "INSIRA A MENSAGEM"
        pElementEnabled.classList.remove("black-color")
        pElementEnabled.classList.add("white-color")
        pElementEnabled.classList.remove("red-background-color")
        pElementEnabled.classList.add("blue-background-color")
    }
}