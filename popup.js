function removeButtons() {
    function areOptionsSaved(callback) {
        chrome.storage.sync.get(["removeLikeButton", "removeCommentButton", "removeShareButton"], function(data) {
            const { removeLikeButton, removeCommentButton, removeShareButton } = data;
            const optionsSaved = (removeLikeButton !== undefined && removeCommentButton !== undefined && removeShareButton !== undefined);
            callback(optionsSaved);
        });
    }

    function removeElements() {
        const elementsToRemove = [
            '[aria-label="Like"]',
            '[aria-label="Comment"]',
            '[aria-label="Share Post"]',
            'line',
            'polygon',
            'section._aamu._ae3_._ae40._ae41._ae48._agge',
            'section._x6s0dn4.xrvj5dj.x1o61qjw.x12nagc.x1gslohp',
            'button_ab1-',
            'div.x1iyjqo2.xh8yej3',
            'div._aac4._aac5._aac6._aj3f._ajdu'
        ];

        elementsToRemove.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.remove();
            });
        });
    }

    areOptionsSaved(function(optionsSaved) {
        if (optionsSaved) {
            removeElements();
        } else {
            chrome.storage.onChanged.addListener(function(changes, namespace) {
                if (changes.removeLikeButton && changes.removeCommentButton && changes.removeShareButton) {
                    removeElements();
                    chrome.storage.onChanged.removeListener(this);
                }
            });
        }
    });
}

function onMutation(mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    removeButtons(node);
                }
            });
        }
    }
}

const observer = new MutationObserver(onMutation);
observer.observe(document.body, { childList: true, subtree: true });


document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('button[type="submit"]');
    saveButton.addEventListener('click', function(event) {
       
        event.preventDefault();

       
        removeButtons();
        
       
        const statusDiv = document.getElementById('status');
        statusDiv.innerText = "Options saved! Reload the page";

     
        setTimeout(function() {
            statusDiv.innerText = "";
        }, 10000); 
    });
});














 
 


 




  
 

 
 


 
 