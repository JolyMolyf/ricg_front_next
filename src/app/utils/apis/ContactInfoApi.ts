import axios from "axios"

const getContactInfo = async () => {
    return await axios.get(`${process.env.BASE_URL}/contactinfo?populate=*`).then((res) => {
        return res.data.data.attributes
    })
}

export default {
    getContactInfo
}