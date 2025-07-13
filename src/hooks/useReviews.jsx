import React, { useContext } from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from '../Provider/Authprovider';

const useReviews = () => {

    const axiosSecure = useAxiosSecure();
    // const {user} = useContext(AuthContext);

    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            // const res = await axiosSecure.get(`/reviews?email=${user.email}`)
            const res = await axiosSecure.get(`/reviews`)
            return res.data;
        }
    })
    return [reviews, refetch]
};


export default useReviews