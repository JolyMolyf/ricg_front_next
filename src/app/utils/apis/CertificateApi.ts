import axios from "axios"

const getCertificateByUniqueId = async (uniqId: string) => {
    const cert = await axios.get(`${process.env.BASE_URL}/certificate/findbyuniqid/${uniqId}`);
    return cert; 
}

export default {
    getCertificateByUniqueId
}