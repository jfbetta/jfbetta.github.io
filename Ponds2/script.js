function navigateWithTransition(url) {
    document.body.classList.add('page-exit'); 
    setTimeout(() => {
        window.location.href = url; 
    }, 500); 
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateWithTransition(this.href);
    });
});
