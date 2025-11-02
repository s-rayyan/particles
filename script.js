// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.classList.add(...("w-2 h-2 bg-red-500 box absolute rounded").split(" "));
        // Set random initial position
        div.style.left = Math.random() * window.innerWidth + 'px';
        div.style.top = Math.random() * window.innerHeight + 'px';
        const speed = 1 + i / 10;
        div.setAttribute('data-speed', speed);
        div.setAttribute('data-num', i);
        document.querySelector(".main").appendChild(div);
    }

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });


    setInterval(() => {
        const boxes = document.querySelectorAll('.box');
        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
            let left = box.style.left ? parseInt(box.style.left.replace('px', '')) : 0;
            let top = box.style.top ? parseInt(box.style.top.replace('px', '')) : 0;

            const speed = parseFloat(box.getAttribute('data-speed')) || 50;
            if (i == 0) {
                box.style.left = mouseX + "px";
                box.style.top = mouseY + "px";
                continue;
            }
            const prev = document.querySelector(`[data-num='${i - 1}']`);
            if (prev) {
                const px = parseInt(prev.style.left.replace("px", "")) || 0;
                const py = parseInt(prev.style.top.replace("px", "")) || 0;
                box.style.left = left + (px - left) / speed + 'px';
                box.style.top = top + (py - top) / speed + 'px';
            }
        }
    }, 16); // ~60fps (16ms per frame)
});
