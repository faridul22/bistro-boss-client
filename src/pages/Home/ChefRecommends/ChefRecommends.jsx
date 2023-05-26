import Card from "../../../components/Card/Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from 'react';

const ChefRecommends = () => {
    const [chefRecommends, setChefRecommends] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular");
                setChefRecommends(popularItems)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"Should try"}
                heading={"Chef Recommends"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    chefRecommends.map(cardItems => <Card
                        key={cardItems._id}
                        cardItems={cardItems}
                    ></Card>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;