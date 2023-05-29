import Card from "../../../../components/Card/Card";

const OrderTab = ({ items }) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {items.map(cardItems => <Card
                key={cardItems._id}
                showPrice={true}
                cardItems={cardItems}
            ></Card>)}
        </div>
    );
};

export default OrderTab;