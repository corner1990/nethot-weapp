const CryptoJS = require('crypto-js')
const CRYPTOJSKEY = '2c30604705fd91d2'
module.exports = {
  // 加密
  encrypt(plaintText) {
    let options = {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
    let key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY)
    let encryptedData = CryptoJS.AES.encrypt(plaintText, key, options)
    let encryptedBase64Str = encryptedData.toString().replace(/\//g, '_')
    encryptedBase64Str = encryptedBase64Str.replace(/\+/g, '+')
    encryptedBase64Str = encryptedBase64Str.replace(/_/g, '/')
    return encryptedBase64Str
  },
  //解密
  decrypt(encryptedBase64Str) {
    // eslint-disable-next-line no-useless-escape
    let vals = encryptedBase64Str.replace(/\-/g, '+').replace(/_/g, '/')
    let options = {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
    let key = CryptoJS.enc.Utf8.parse(CRYPTOJSKEY)
    let decryptedData = CryptoJS.AES.decrypt(vals, key, options)
    let decryptedStr = CryptoJS.enc.Utf8.stringify(decryptedData)
    return decryptedStr
  }
}

