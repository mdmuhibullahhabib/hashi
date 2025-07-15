import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

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
  return [appointments, refetch]
}

export default useBookedAppointment;