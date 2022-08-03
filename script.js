const form = document.querySelector('form');
const input = document.querySelector('.input');

const replaceImagens = (url) => {
    //document.body.style.background = 'red';
    const images = document.querySelectorAll('img ');
    images.forEach((image) => image.src = url);
};

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    
    //alert('Está funcionando!');
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: replaceImagens,
        args: [input.value]
    });
});