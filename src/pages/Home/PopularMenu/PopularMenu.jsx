
// import { useEffect, useState } from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../../components/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';
const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")

    return (
        <section className='mb-14'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className='mx-auto my-10 text-center'>
                <Link to="/menu">
                    <button className='btn border-0 border-b-4 btn-outline'>View full menu</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;