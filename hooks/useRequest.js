import { useState } from 'react'
import Net from './Net'

const useRequest = (token) => {
  const [response, setResponse] = useState({})
  const [error, setError] = useState({})
  const net = Net(token)
  const makeRequest = async (uri, method, payload) => {
    try {
      const result = await net(
        {
          method: method,
          url: uri,
          headers: {
            'Content-Type': 'application/json',
          },
          data: payload,
        },
        {}
      )
      setResponse(result)
    } catch (e) {
      setError(e)
    }
  }
  return [makeRequest, response, error]
}

export default useRequest
