// script.js

// 1. Explore Different Interactions with Hotspots
document.querySelectorAll('.Hotspot').forEach((hotspot, index) => {
    hotspot.addEventListener('click', () => {
        // Add your logic here for hotspot interactions
        alert(`Hotspot ${index + 1} clicked!`);
    });
});

// 2. Explore Variations by Swapping Colors
const modelViewerColor = document.querySelector("model-viewer#color");

document.querySelector('#color-controls').addEventListener('click', (event) => {
  const colorString = event.target.dataset.color;
  const [material] = modelViewerColor.model.materials;
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

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


