// Function to remove like and comment buttons
function removeButtons() {
    const likeButton = document.querySelector('[aria-label="Like"]');
    const commentButton = document.querySelector('[aria-label="Comment"]');
    const IconButton = document.querySelector('[aria-label="Share Post"]');
    var lineElement = document.querySelector('line');
    var polygonElement = document.querySelector('polygon'); 
    var sectionToRemove = document.querySelector('section._aamu._ae3_._ae40._ae41._ae48._agge');
    var buttonToRemove = document.querySelector('button_ab1-');
    var elementToRemove = document.querySelector('div.x1iyjqo2.xh8yej3');


    // Ensure that the buttons are present before attempting to remove them
    if (likeButton) {
        likeButton.remove();
    }

    if (commentButton) {
        commentButton.remove();
    }
    if (IconButton) {
        IconButton.remove();
    }
    if (lineElement) {
        lineElement.remove(); 
    }
    if (polygonElement) { 
        polygonElement.remove();
    }
    if (sectionToRemove) { 
        sectionToRemove.remove(); 
    }
    if (buttonToRemove) { 
        buttonToRemove.remove(); 
    }
    if (elementToRemove) {
       elementToRemove.remove();
    } 

}

// Observer callback for mutations
function onMutation(mutationsList) {
    for (const mutation of mutationsList) {
        // Check if nodes were added to the DOM
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Iterate over added nodes and check if they include like or comment buttons
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Check if it's an element node
                    const likeButton = node.querySelector('[aria-label="Like"]');
                    const commentButton = node.querySelector('[aria-label="Comment"]');
                    const IconButton = node.querySelector('[aria-label="Share Post"]'); 
                    var lineElement = document.querySelector('line');
                    var polygonElement = document.querySelector('polygon'); 
                    var sectionToRemove = document.querySelector('section._aamu._ae3_._ae40._ae41._ae48._agge');
                    var buttonToRemove = document.querySelector('button_ab1-');
                    var elementToRemove = document.querySelector('div.x1iyjqo2.xh8yej3');
                   
                   
                   
                    // If like or comment buttons are found in the added node, remove them
                    if (likeButton) {
                        likeButton.remove();
                    }
                    
                    if (commentButton) {
                        commentButton.remove();
                    }
                    if (IconButton) { 
                        IconButton.remove(); 
                    }
                    if (lineElement) {
                        lineElement.remove(); 
                    }
                    if (polygonElement) { 
                        polygonElement.remove();
                    }
                    if (sectionToRemove) { 
                        sectionToRemove.remove(); 
                    }
                    if (buttonToRemove) { 
                        buttonToRemove.remove(); 
                    }
                    if (elementToRemove) {
                        elementToRemove.remove();
                    }
                }
            });
        }
    }
}


// Create a Mutation Observer to watch for changes in the DOM
const observer = new MutationObserver(onMutation);

// Start observing the DOM
observer.observe(document.body, { childList: true, subtree: true });

// Initial removal when the page loads
removeButtons();

  