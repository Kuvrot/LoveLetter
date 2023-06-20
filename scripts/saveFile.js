function save () {
    
    const data = $('#summernote').summernote('code');
    const blob = new Blob([data], { type: 'text/plain' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'untitled.anel';
// Append the anchor element to the body
document.body.appendChild(a);

// Trigger a click event on the anchor element
a.click();

// Clean up by removing the anchor element
document.body.removeChild(a);

}