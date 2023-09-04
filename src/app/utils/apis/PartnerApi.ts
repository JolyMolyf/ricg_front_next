import axios from "axios"

const getAllPartners = async () => {
    return await axios.get(`${process.env.BASE_URL}/partners?populate=*`)
}

export default {
    getAllPartners
}