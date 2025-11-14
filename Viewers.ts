export function createViewer() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>Edge Detection Viewer</h2>
    <p>Upload an image to preview processed frames</p>
    <input type="file" id="input" accept="image/*">
    <br><br>
    <img id="img" style="max-width:100%;border:1px solid #ccc;">
  `;

  const input = container.querySelector('#input');
  const img = container.querySelector('#img');

  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    img.src = URL.createObjectURL(file);
  });

  return container;
}
