if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

document.getElementById('readClipboardBtn').addEventListener('click', async () => {
  try {
    const clipboardText = await navigator.clipboard.readText();
    document.getElementById('clipboardOutput').textContent = `Clipboard content: ${clipboardText}`;
  } catch (err) {
    document.getElementById('clipboardOutput').textContent = 'Failed to read clipboard: ' + err;
  }
});