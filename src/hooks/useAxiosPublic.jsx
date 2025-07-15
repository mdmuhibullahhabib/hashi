import axios from 'axios'
import React from 'react'

 const axiosPublic = axios.create({
    baseURL: ''
})

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;