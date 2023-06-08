import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useCard from "../../../hooks/useCard";


// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    const [cards] = useCard();
    const total = cards.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="my-10 w-full">
            <SectionTitle subHeading="Please Provide" heading="Payment"></SectionTitle>
            <h3 className='text-3xl text-center'>Payment Now</h3>
            <Elements stripe={stripePromise}>
                <CheckOut cards={cards} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;