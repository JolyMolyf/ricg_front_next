import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = process.env.BASE_URL;
const TOKEN = process.env.API_TOKEN;


const getAllClients = async () => {

    return axios.get(`${BASE_URL}/clients`);

}

const createClient = () => {

}

const updateClient = () => {

}

const deleteClient = () => {

}

export default {getAllClients, createClient, updateClient, deleteClient}