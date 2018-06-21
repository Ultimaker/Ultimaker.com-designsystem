class TextUtils {
    static htmlDecode(input) {
        const e = document.createElement('div');

        e.innerHTML = input;

        return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
    }
}

export default TextUtils;
