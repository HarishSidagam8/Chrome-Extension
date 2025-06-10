chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "download_images") {
    message.urls.forEach(url => {
      chrome.downloads.download({ url });
    });
  }
  if (message.type === "download_tables") {
    message.tables.forEach((html, index) => {
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      chrome.downloads.download({
        url,
        filename: `table-${index + 1}.html`
      });
    });
  }
});