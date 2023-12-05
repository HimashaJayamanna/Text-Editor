// Function to make selected text bold
function bold() {
    document.execCommand('bold', false, null);
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