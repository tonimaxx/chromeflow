// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
    console.log('Image Generator Extension installed!');
});

// Handle messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getSettings') {
          chrome.storage.local.get(['apiKey', 'model'], (result) => {
                  sendResponse(result);
          });
          return true;
    }
});
