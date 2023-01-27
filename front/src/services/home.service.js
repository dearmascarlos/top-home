import api from './api'

const postHome = async(home) => {
  const response = await api.post('home', home)
  return response.data
}

const getAllhomes = async() => {
    const response = await api.get('home/get')
    console.log(response)
    return response.data
}


export { postHome, getAllhomes }
