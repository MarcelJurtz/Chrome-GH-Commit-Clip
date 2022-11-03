function copyMessage() {

  chrome.tabs.query({ active: true }, function (tabs) {
    chrome.scripting.executeScript(
    {
      target: { tabId: tabs[0].id },
      files: ['src/js/script.js']
    });
  });

  window.close();
}
  
document.getElementById('copy-msg').addEventListener('click', copyMessage);