import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/Authprovider';

const useBookedAppointment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
console.log(user)
  const { data: appointments = [], refetch } = useQuery({
    queryKey: ['appointments', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/appointments?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(appointments)
  return [appointments, refetch];
};

export default useBookedAppointment;
