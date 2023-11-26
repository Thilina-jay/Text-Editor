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