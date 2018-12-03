function jcfResizeText() {
    var elements  = document.getElementsByClassName('jcfResize');
    if (elements.length < 0) {
        return;
    }
    _len = elements.length;
    for (_i = 0; _i < _len; _i++) {
        var el = elements[_i];
        el.style.fontSize = "100%";
        for (var size = 100; el.scrollHeight > el.clientHeight; size -= 10) {
            el.style.fontSize = size + '%';
        }
    }
}

jcfResizeText();
window.addEventListener('resize', jcfResizeText);
