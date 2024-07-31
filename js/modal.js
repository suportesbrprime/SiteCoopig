// Get all the "Ver Telas" buttons
var verTelasElements = document.getElementsByClassName("verTelas");

// Add click event to each "Ver Telas" button
for (var i = 0; i < verTelasElements.length; i++) {
    verTelasElements[i].onclick = function() {
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    }
}

// Get all the modal elements
var modals = document.getElementsByClassName("modal");

// Get all the close buttons
var closeBtns = document.getElementsByClassName("closeBtn");

// Add click event to each close button
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        for (var j = 0; j < modals.length; j++) {
            modals[j].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        for (var i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
            console.log('oi')
        }
    }
}
