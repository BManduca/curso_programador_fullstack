document.querySelector("select[name='selected-option']").addEventListener("change", function() {
    alert(event.target.value)
})