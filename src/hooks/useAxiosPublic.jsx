import axios from 'axios'
import React from 'react'

 const axiosPublic = axios.create({
    baseURL: 'https://doc-house-server-weld.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;