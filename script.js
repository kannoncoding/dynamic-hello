// Changing the "Hello World" text dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const helloText = document.getElementById('helloText');
    if (helloText.innerText === "Hello World!") {
        helloText.innerText = "Hello Dynamic World!";
    } else {
        helloText.innerText = "Hello World!";
    }
});

// Toggling visibility of "Hello World" text
document.getElementById('toggleVisibilityBtn').addEventListener('click', function() {
    const helloText = document.getElementById('helloText');
    if (helloText.style.display === "none") {
        helloText.style.display = "block";
    } else {
        helloText.style.display = "none";
    }
});
