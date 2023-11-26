function applyStyle(style, value = null) {
    document.execCommand(style, false, value);
}
function applyColor(value) {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, value);
    document.execCommand('styleWithCSS', false, false);
}

document.getElementById('fontColorPicker').addEventListener('input', function(event) {
    applyColor(event.target.value);
});
function applyAlignment(alignment) {
    const textArea = document.getElementById('text-area');

    if (alignment === 'justify') {
        textArea.style.textAlign = 'justify';
    } else {
        textArea.style.textAlign = alignment;
    }
}
const textArea = document.getElementById('text-area');

textArea.addEventListener('input', function () {
    saveState();
});

function saveState() {
    document.execCommand('defaultParagraphSeparator', false, 'p');
}

function undo() {
    document.execCommand('undo', false, null);
}

function redo() {
    document.execCommand('redo', false, null);
}