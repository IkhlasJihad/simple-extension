let color = '#dcdcdc';
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to ', `${color}`);
})
