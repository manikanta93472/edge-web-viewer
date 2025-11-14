export function createViewer(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'container';

  const header = document.createElement('header');
  header.innerHTML = '<h1>Edge Detection Viewer</h1>';
  container.appendChild(header);

  const controls = document.createElement('div');
  controls.className = 'controls';

  const fileLabel = document.createElement('label');
  fileLabel.className = 'btn';
  fileLabel.textContent = 'Upload image';
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  fileLabel.appendChild(fileInput);

  const reloadBtn = document.createElement('button');
  reloadBtn.className = 'btn';
  reloadBtn.textContent = 'Reload sample';

  const stats = document.createElement('div');
  stats.className = 'stats';
  const fpsText = document.createElement('span');
  fpsText.textContent = 'FPS: -';
  const resText = document.createElement('span');
  resText.textContent = 'Resolution: -';
  stats.appendChild(fpsText);
  stats.appendChild(document.createTextNode(' • '));
  stats.appendChild(resText);

  controls.appendChild(fileLabel);
  controls.appendChild(reloadBtn);
  controls.appendChild(stats);

  container.appendChild(controls);

  const imageWrap = document.createElement('div');
  imageWrap.className = 'image-wrap';
  const img = document.createElement('img');
  img.id = 'processedImage';
  img.alt = 'Processed frame';
  img.src = '/sample_frame.png';
  imageWrap.appendChild(img);

  container.appendChild(imageWrap);

  // FPS measurement (measures reload/display events)
  let lastTime = performance.now();
  function updateFps() {
    const now = performance.now();
    const dt = now - lastTime;
    lastTime = now;
    const fps = dt > 0 ? Math.round(1000 / dt) : 0;
    fpsText.textContent = FPS: ${fps};
  }

  img.addEventListener('load', () => {
    resText.textContent = Resolution: ${img.naturalWidth}×${img.naturalHeight};
    updateFps();
  });

  reloadBtn.addEventListener('click', () => {
    // Force reload from server to simulate a "new frame"
    img.src = hero.jpg?ts=${Date.now()};
  });

  fileInput.addEventListener('change', (ev) => {
    const f = (ev.target as HTMLInputElement).files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    img.src = url;
  });

  return container;
}