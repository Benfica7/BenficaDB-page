document,addEventListener("DOMContentLoaded", function() {
    const home1 = document.getElementById("nav-home")
    const home2 = document.getElementById("nav-home2")
    const modal = document.getElementById("nav-bar-responsive")
    
    home1.addEventListener("click", function() {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    })

    home2.addEventListener("click", function() {
        modal.close()
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    })
})