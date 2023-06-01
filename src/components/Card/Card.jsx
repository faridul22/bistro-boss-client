import { useContext } from "react";
import { AuthContext } from './../../providers/AuthProvider/AuthProvider';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCard from "../../hooks/useCard";

const Card = ({ cardItems, showPrice }) => {
    const { name, image, recipe, price, _id } = cardItems;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCard()
    const navigate = useNavigate();
    const location = useLocation()

    const handleAddToCard = (item) => {
        console.log(item)
        if (user && user.email) {
            const orderItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch("http://localhost:5000/cards", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch card to update of the number of the card
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the card',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl rounded-none h-96">
                <figure>
                    <img className="w-full" src={image} alt="Shoes" />
                </figure>
                {showPrice && <p className="bg-gray-900 text-white absolute right-5 top-5 py-1 px-4">${price}</p>}
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center mt-5">
                        <button onClick={() => handleAddToCard(cardItems)} className="btn bg-gray-200 text-yellow-500 border-0 border-b-4 border-yellow-500">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;