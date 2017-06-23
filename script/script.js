
document.getElementById("contact-button").addEventListener("click", function() {
    let x = document.getElementById("contact-overlay");
    x.style.display = 'block';
});

document.getElementById("form-close-button").addEventListener("click", function() {
    let y = document.getElementById("contact-overlay");
    y.style.display = 'none';
})

document.getElementById("form-submit-button").addEventListener("click", function() {
    let z = document.getElementById("contact-confirm");
    z.style.display = 'block';
});

document.getElementById("confirm-close-button").addEventListener("click", function() {
    let b = document.getElementById("contact-confirm");
    let c = document.getElementById("contact-overlay");
    b.style.display = 'none';
    c.style.display = 'none';
});