import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCard = () => {
    const { user } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: card = [] } = useQuery({
        queryKey: ['cards', user?.email],
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/cards?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return response.json()
        // },

        queryFn: async () => {
            const res = await axiosSecure(`/cards?email=${user?.email}`)
            return res.data
        },
    })
    return [card, refetch, isLoading]

};

export default useCard;