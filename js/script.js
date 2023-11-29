// script.js

const modelViewerColor = document.querySelector("model-viewer#color");

// 1. Explore Different Interactions with Hotspots
document.querySelectorAll('.Hotspot').forEach((hotspot, index) => {
    hotspot.addEventListener('click', () => {
        // Add your logic here for hotspot interactions
        alert(`Hotspot ${index + 1} clicked!`);
    });
});

// 2. Explore Variations by Swapping Colors
document.querySelectorAll('.controls button').forEach(button => {
    button.addEventListener('click', () => {
        const colorString = button.dataset.color;
        const material = modelViewerColor.model.materials[0].pbrMetallicRoughness.baseColorFactor;
        material[0] = hexToRgb(colorString).r / 255;
        material[1] = hexToRgb(colorString).g / 255;
        material[2] = hexToRgb(colorString).b / 255;

        // Ensure that the model updates
        modelViewerColor.model.materials[0].pbrMetallicRoughness.baseColorFactor = material;
        modelViewerColor.dispatchEvent(new CustomEvent('load'));
    });
});

function hexToRgb(hex) {
    // Convert a hex color code to an RGB object
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

// 3. Use Camera Views to Showcase Specific Aspects
document.querySelector('#showcase-view').addEventListener('click', () => {
    // Change the camera position to showcase a specific aspect of the product
    modelViewerColor.cameraOrbit = '0deg 90deg 2m';
    modelViewerColor.cameraTarget = '0m 0.5m 0m';
});

document.querySelector('#reset-view').addEventListener('click', () => {
    // Reset the camera position to the default
    modelViewerColor.cameraOrbit = '0deg 90deg 2m';
    modelViewerColor.cameraTarget = '0m 0.5m 0m';
});


