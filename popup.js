let colorPicker = document.getElementById('picker');
chrome.storage.sync.get("color", ({ color }) => {
    colorPicker.value = color;
});

colorPicker.addEventListener("input", setColor);

async function setColor(event){
    let color = event.target.value
    chrome.storage.sync.set({color})
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setBackgroundColor
    });
}

// The body of this function will be executed as a content script inside the
// current page
function setBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}