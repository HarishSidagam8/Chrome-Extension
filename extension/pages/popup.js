
function injectAndSendMessage(action) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tabId = tabs[0].id;

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    }, () => {
      chrome.tabs.sendMessage(tabId, { action });
    });
  });
}

document.getElementById('downloadImages').addEventListener('click', () => {
  injectAndSendMessage("extract_images");
});

document.getElementById('downloadTables').addEventListener('click', () => {
  injectAndSendMessage("extract_tables");
});
