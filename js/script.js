// script.js

// 1. Explore Different Interactions with Hotspots
document.querySelectorAll('.Hotspot').forEach((hotspot, index) => {
    hotspot.addEventListener('click', () => {
        // Add your logic here for hotspot interactions
        alert(`Hotspot ${index + 1} clicked!`);
    });
});

// 2. Explore Variations by Swapping Colors
const chairModelViewer = document.querySelector("#chair-model-viewer");
const sofaModelViewer = document.querySelector("#sofa-model-viewer");
const lampModelViewer = document.querySelector("#lamp-model-viewer");

document.querySelector('#chair-color-controls').addEventListener('click', (event) => {
    updateColor(chairModelViewer, event);
});

document.querySelector('#sofa-color-controls').addEventListener('click', (event) => {
    updateColor(sofaModelViewer, event);
});

document.querySelector('#lamp-color-controls').addEventListener('click', (event) => {
    updateColor(lampModelViewer, event);
});

function updateColor(modelViewer, event) {
    const colorString = event.target.dataset.color;
    const material = modelViewer.model.materials[0].pbrMetallicRoughness;
    material.setBaseColorFactor(colorString);

    // Ensure that the model updates
    modelViewer.dispatchEvent(new CustomEvent('load'));
}

// 3. Use Camera Views to Showcase Specific Aspects
document.querySelector('#showcase-view').addEventListener('click', () => {
    // Change the camera position to showcase a specific aspect of the product
    chairModelViewer.cameraOrbit = '0deg 90deg 2m';
    chairModelViewer.cameraTarget = '0m 0.5m 0m';

    sofaModelViewer.cameraOrbit = '0deg 90deg 2m';
    sofaModelViewer.cameraTarget = '0m 0.5m 0m';

    lampModelViewer.cameraOrbit = '0deg 90deg 2m';
    lampModelViewer.cameraTarget = '0m 0.5m 0m';
});

document.querySelector('#reset-view').addEventListener('click', () => {
    // Reset the camera position to the default
    chairModelViewer.cameraOrbit = '0deg 90deg 2m';
    chairModelViewer.cameraTarget = '0m 0.5m 0m';

    sofaModelViewer.cameraOrbit = '0deg 90deg 2m';
    sofaModelViewer.cameraTarget = '0m 0.5m 0m';

    lampModelViewer.cameraOrbit = '0deg 90deg 2m';
    lampModelViewer.cameraTarget = '0m 0.5m 0m';
});
