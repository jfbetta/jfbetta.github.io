const plantContainer = document.querySelector('.ponds-container');
const exploreContainer = document.querySelector('.data-container');

function enableSmoothScroll(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return; 
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; 
        container.scrollLeft = scrollLeft - walk;
    });
}

enableSmoothScroll(plantContainer);
enableSmoothScroll(exploreContainer);

function enableSwipeScroll(container) {
    let startX, scrollLeft;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

enableSwipeScroll(plantContainer);
enableSwipeScroll(exploreContainer);


function toggleShape(id) {
    const shape = document.getElementById(`shape-${id}`);
    const text = document.getElementById(`text-${id}`);
    const button = text.closest('.tombol');

    shape.classList.toggle("enlarged");
    button.classList.toggle("enlarged");
}

document.querySelectorAll('.check-btn').forEach(button => {
    button.addEventListener('click', function handleClick() {
        const doItem = this.closest('.do-item'); 
        const parent = doItem.parentNode;
        const nextSibling = doItem.nextSibling; 

        doItem.classList.add('fade-out');

        doItem.addEventListener('transitionend', function handleTransitionEnd() {
            const clonedItem = doItem.cloneNode(true); 

            doItem.removeEventListener('transitionend', handleTransitionEnd);
            doItem.remove();

            setTimeout(() => {
                if (nextSibling) {
                    parent.insertBefore(clonedItem, nextSibling);
                } else {
                    parent.appendChild(clonedItem);
                }

                clonedItem.classList.remove('fade-out');
                clonedItem.querySelector('.check-btn').addEventListener('click', handleClick);
            }, 3000);
        });
    });
});







