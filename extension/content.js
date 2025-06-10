function downloadImages() {
  const imageUrls = Array.from(document.images).map(img => img.src);
  chrome.runtime.sendMessage({ type: "download_images", urls: imageUrls });
}

function downloadTables() {
  const tables = Array.from(document.querySelectorAll("table")).map(table => table.outerHTML);
  chrome.runtime.sendMessage({ type: "download_tables", tables });
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "extract_images") downloadImages();
  if (msg.action === "extract_tables") downloadTables();
});