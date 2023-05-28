import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg"
import dessertImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import saladsImage from "../../../assets/menu/salad-bg.jpg"
import soupsImage from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const favoriteFoodBtn = <>
        <div className="text-center my-5">
            <button className="btn btn-outline border-0 border-b-2">Order your favorite food</button>
        </div>
    </>
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salads = menu.filter(item => item.category === "salad")
    const soups = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={menuImage} title={"Our Menu"}></Cover>

            {/* offered menu */}
            <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {favoriteFoodBtn}

            {/* dessert menu */}
            <div className="my-10">
                <MenuCategory
                    items={desserts}
                    title={"Desserts"}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    coverImage={dessertImage}
                ></MenuCategory>

                {favoriteFoodBtn}
            </div>

            {/*pizza */}
            <div className="my-10">
                <MenuCategory
                    items={pizza}
                    title={"Pizza"}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    coverImage={pizzaImage}
                ></MenuCategory>

                {favoriteFoodBtn}
            </div>

            {/*salads */}
            <div className="my-10">
                <MenuCategory
                    items={salads}
                    title={"Salads"}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    coverImage={saladsImage}
                ></MenuCategory>

                {favoriteFoodBtn}
            </div>

            {/*soups */}
            <div className="my-10">
                <MenuCategory
                    items={soups}
                    title={"Soups"}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    coverImage={soupsImage}
                ></MenuCategory>

                {favoriteFoodBtn}
            </div>
        </div>
    );
};

export default Menu;