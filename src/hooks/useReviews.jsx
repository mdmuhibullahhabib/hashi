import React, { useContext } from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from '../Provider/Authprovider';

const useReviews = () => {

    const axiosPublic = useAxiosPublic();
    // const {user} = useContext(AuthContext);

    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews`)
            return res.data;
        }
    })
    return [reviews, refetch]
};


export default useReviews