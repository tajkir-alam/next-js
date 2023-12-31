import { AuthContext } from '@/Provider/AuthProvider';
import React, { useContext } from 'react';
import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
};

const useRole = () => {
    const { user } = useContext(AuthContext);
    const { data: role } = useSWR(`/api/users?email=${user?.email}`, fetcher);

    return role?.role;
};

export default useRole;