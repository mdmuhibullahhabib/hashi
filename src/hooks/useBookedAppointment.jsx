import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useBookedAppointment = () => {
        const axiosSecure = useAxiosSecure();

      const { data: appointments = [], refetch } = useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const res = await axiosSecure.get('/appointment');
      return res.data;
    },
  });
      return [appointments, refetch]
}

export default useBookedAppointment;