// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;
    const particles = [];
    const particleCount = 80;

    // Create particles with gradient colors and sizes
    function createParticle(index) {
        const div = document.createElement('div');
        div.classList.add('particle', 'box', 'absolute', 'rounded-full');
        div.setAttribute('data-speed', 5 + index * 0.15);
        div.setAttribute('data-num', index);
        
        // Calculate size and opacity (smaller and more transparent as trail gets longer)
        const size = Math.max(3, 8 - index * 0.05);
        const opacity = Math.max(0.2, 1 - index * 0.01);
        
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.style.opacity = opacity;
        
        // Gradient color from blue to purple to pink
        const hue = 240 + (index / particleCount) * 60; // 240 (blue) to 300 (magenta)
        div.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 70%) 0%, hsl(${hue}, 100%, 50%) 100%)`;
        div.style.boxShadow = `0 0 ${size * 2}px hsla(${hue}, 100%, 60%, 0.6)`;
        
        // Set initial position to center
        div.style.left = window.innerWidth / 2 + 'px';
        div.style.top = window.innerHeight / 2 + 'px';
        
        particles.push(div);
        document.querySelector(".main").appendChild(div);
        return div;
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        createParticle(i);
    }

    // Track mouse position
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Handle window resize
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    });

    // Animation loop with requestAnimationFrame for smoother performance
    function animate() {
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            let left = particle.style.left ? parseFloat(particle.style.left.replace('px', '')) : windowWidth / 2;
            let top = particle.style.top ? parseFloat(particle.style.top.replace('px', '')) : windowHeight / 2;

            const speed = parseFloat(particle.getAttribute('data-speed')) || 5;
            
            if (i === 0) {
                // First particle follows mouse
                particle.style.left = mouseX + 'px';
                particle.style.top = mouseY + 'px';
            } else {
                // Other particles follow the previous particle
                const prev = particles[i - 1];
                if (prev) {
                    const px = prev.style.left ? parseFloat(prev.style.left.replace('px', '')) : windowWidth / 2;
                    const py = prev.style.top ? parseFloat(prev.style.top.replace('px', '')) : windowHeight / 2;
                    
                    // Smooth interpolation
                    const newX = left + (px - left) / speed;
                    const newY = top + (py - top) / speed;
                    
                    particle.style.left = newX + 'px';
                    particle.style.top = newY + 'px';
                }
            }
        }
        requestAnimationFrame(animate);
    }
    
    animate();
});
