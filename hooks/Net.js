import axios from 'axios'

const WaveAI = (token) =>
  axios.create({
    baseURL: 'http://192.168.2.175:8000',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

export default WaveAI
