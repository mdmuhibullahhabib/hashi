import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDoctor = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/doctors`)
            return res.data;
        }
    })
    return [doctors, refetch]
};


export default useDoctor;