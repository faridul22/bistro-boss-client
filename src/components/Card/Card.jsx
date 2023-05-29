
const Card = ({ cardItems, showPrice }) => {
    const { name, image, recipe, price } = cardItems
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
                        <button className="btn bg-gray-200 text-yellow-500 border-0 border-b-4 border-yellow-500">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;