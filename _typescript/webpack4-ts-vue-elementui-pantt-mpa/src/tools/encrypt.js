//crypto-js加密AES
//详细说明见wiki:
//https://wiki.ictr.com.cn/doku.php?id=ictr-tb:%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB:%E6%BD%98%E5%A9%B7%E5%A9%B7:%E5%89%8D%E7%AB%AF:crypto-js%E5%8A%A0%E5%AF%86

const CryptoJS = require('crypto-js') // 引用AES源码js

// const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF') // 十六位十六进制数作为密钥
// const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412') // 十六位十六进制数作为密钥偏移量

// 解密方法
function Decrypt(word, key) {
  let ckey = CryptoJS.enc.Utf8.parse(key) // 十六位十六进制数作为密钥
  // let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  // let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)

  let decrypt = CryptoJS.AES.decrypt(word, ckey, {

    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  console.log('decryptedStr', decryptedStr.toString())

  return decryptedStr.toString()
}

// 加密方法
function Encrypt(word, key) {
  let ckey = CryptoJS.enc.Utf8.parse(key)
  // let srcs = CryptoJS.enc.Utf8.parse(word)
  let encrypted = CryptoJS.AES.encrypt(word, ckey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  console.log('encrypted', encrypted.toString())
  return encrypted.toString()
}
export default {
  Decrypt,
  Encrypt
}
