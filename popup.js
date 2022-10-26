function copyMessage() {

  chrome.tabs.query({ active: true }, function (tabs) {
    chrome.scripting.executeScript(
    {
      target: { tabId: tabs[0].id },
      files: ['script.js']
    });
  });

  window.close();
}
  
document.getElementById('copy-msg').addEventListener('click', copyMessage);