// Function to make selected text bold
function bold() {
    document.execCommand('bold', false, null);
}

// Function to underline selected text
function underline() {
    document.execCommand('underline', false, null);
}

// Function to make selected text italic
function italic() {
    document.execCommand('italic', false, null);
}


//Function for placeholder
const content = document.getElementById('content');
const placeholder = content.querySelector('.placeholder');

content.addEventListener('input', function() {
    const contentText = this.textContent.trim();
    if (contentText !== '') {
        placeholder.style.display = 'none';
    } else {
        placeholder.style.display = 'block';
    }
});