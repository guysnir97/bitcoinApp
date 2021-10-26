import axios from "axios"
export default {
    getRate,
    // getMarketPrice,
    // getConfirmedTransactions,
}

async function getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
    const res = await axios.get(url)
    return res.data

}