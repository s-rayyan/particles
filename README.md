# Particles - Mouse Trail Effect

An interactive particle chain animation that follows your mouse cursor. Particles are linked in a chain where each particle smoothly follows the previous one, creating a beautiful trailing effect.

## Project Structure

```
.
├── index.html    # Main HTML file
├── styles.css    # Custom styles (if needed)
├── script.js     # Particle animation logic
└── README.md     # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. Or use a local development server:
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`
   - VS Code: Use the Live Server extension
3. Move your mouse around to see the particle chain follow your cursor!

## Technologies

- **Tailwind CSS**: Utility-first CSS framework loaded via CDN
- **Vanilla JavaScript**: No framework dependencies
- **HTML5**: Modern semantic HTML

## How It Works

- **100 particles** are created and positioned randomly on the screen
- Each particle has a **speed** attribute (`data-speed`) that determines how quickly it follows
- The **first particle** follows your mouse cursor directly
- Each subsequent particle follows the **previous particle** in the chain
- Particles move smoothly using a lerp-like interpolation formula: `position + (target - position) / speed`

## Customization

- **Particle count**: Change `i < 100` in `script.js` to adjust the number of particles
- **Particle speed**: Modify the speed calculation `1 + i / 10` to change how particles move
- **Particle appearance**: Edit the Tailwind classes in `script.js` (currently `w-2 h-2 bg-red-500 rounded`)
- **Animation speed**: Adjust the interval `16` (milliseconds) for different frame rates

## Features

- Smooth mouse-following particle chain
- Configurable particle count and speeds
- Responsive design with Tailwind CSS
- 60fps animation (16ms interval)
- Cross-browser compatible

