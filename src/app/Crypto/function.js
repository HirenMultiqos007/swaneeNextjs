var CryptoJS = require("crypto-js");

export const encrypt = (data) => {
    var encJson = CryptoJS.AES.encrypt(JSON.stringify(data), "secret").toString();
    const encData = CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Utf8.parse(encJson)
      );
  return encData;
};
// export const decrypt = (data) => {
//     if(data){
//         const decData = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
//       const bytes = CryptoJS.AES.decrypt(decData, "secret").toString(CryptoJS.enc.Utf8);
//       return JSON.parse(bytes);
//     }
// };

export const decrypt = (data) => {
    try {
        if (data) {
            const decData = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
            const bytes = CryptoJS.AES.decrypt(decData, "secret").toString(CryptoJS.enc.Utf8);
            return JSON.parse(bytes);
        }
    } catch (error) {
        console.error("Decryption error:", error);
        return null; // Handle the error appropriately, e.g., return null or throw an exception
    }
};

