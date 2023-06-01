import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';

const useCard = () => {
    const { user } = useContext(AuthContext)
    const { isLoading, refetch, data: card = [] } = useQuery({
        queryKey: ['cards', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/cards?email=${user?.email}`)
            return response.json()
        },
    })
    return [card, refetch, isLoading]

};

export default useCard;