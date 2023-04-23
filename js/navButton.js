document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("nav-button")
    const modal = document.getElementById("nav-bar-responsive")
    const exit = document.getElementById("nav-button-close")
    
    button.addEventListener("click", function() {
        modal.classList.remove("slideCloseNav")
        modal.showModal()
    })

    exit.addEventListener("click", function() {
        modal.close()
    })
})