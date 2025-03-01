function textCleaner(string) {
    return string.replace(/\[x\]/g, "")
                 .replace(/\$/g, "")
                 .replace(/#/g, "")
                 .replace(/<i>/g, "<em>")
                 .replace(/<\/i>/g, "</em>")
                 .trim()
}

export default textCleaner