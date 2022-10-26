function copyMessage() {

  chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: ['script.js']
    });
  });
}
  
document.getElementById('copy-msg').addEventListener('click', copyMessage);