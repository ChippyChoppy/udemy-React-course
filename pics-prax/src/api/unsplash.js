import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 5sTdeOlkmh46kJ2rOPqdr5RzHVFdcPoT8oemq80RP8A'
    }
})