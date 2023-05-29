import { useState } from 'react';
import orderCoverImage from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const salads = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const soups = menu.filter(item => item.category === "soup")
    const desserts = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div className='mb-10'>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover image={orderCoverImage} title={"Order Food"} subTitle={"Would yor like to try a dish?"}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => { setTabIndex(index) }}>

                <TabList className="uppercase">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Sups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <OrderTab items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>



            {/* <div className="tabs my-5 ">
                <a className="tab tab-bordered">Tab 1</a>
                <a className="tab tab-bordered tab-active">Tab 2</a>
                <a className="tab tab-bordered">Tab 3</a>
            </div> */}
        </div>
    );
};

export default Order;