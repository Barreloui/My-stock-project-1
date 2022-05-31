const axios = require("axios");
const tokenIEX = process.env.pk_ecce959b877847f1962a2862ec325780; //IEX
// Function to get URL to a company logo
const getCompanyLogo = (symbolName) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `https://cloud.iexapis.com/stable/stock/${symbolName}/logo/quote?token=${tokenIEX}`,
            dataType: "json"
        })
            .then((logo) => {
                resolve(logo.data);
            })
            .catch((err) => reject(err))
    })

}

module.exports = { getCompanyLogo }