const modelViewerColor = document.querySelector("model-viewer#color");

document.querySelector('#color-controls').addEventListener('click', (event) => {
  const colorString = event.target.dataset.color;
  const [material] = modelViewerColor.model.materials;
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

function loadChairVariant(variantSrc) {
    const chairViewer = document.getElementById('chairViewer');
    chairViewer.src = `./models/${variantSrc}`;
};