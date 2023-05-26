
const Card = ({ cardItems }) => {
    const { name, image, recipe } = cardItems
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                <figure>
                    <img className="w-full" src={image} alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-start">
                        <button className="btn bg-gray-200 text-yellow-500 border-0 border-b-4 border-yellow-500">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;