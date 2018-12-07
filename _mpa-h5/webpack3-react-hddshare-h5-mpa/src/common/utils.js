export function resizeImg(url, size) {
    if (url && size) {
        let arr = url.split('.')
        return window.IMG_API + arr[0] + size + arr[1]
    }
}