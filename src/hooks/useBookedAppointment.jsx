import React, { useContext } from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/Authprovider';

const useBookedAppointment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext)


  const { data: appointments = [], refetch } = useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/appointment?email=${user.email}`)
      return res.data;
    },
  });
  console.log(appointments)
  return [appointments, refetch]
}

export default useBookedAppointment;