import { Link } from "react-router-dom";
import MenuItems from "../../../components/MenuItems/MenuItems";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({ items, title, subTitle, coverImage }) => {
    return (
        <div className="mt-10">
            {title && <Cover image={coverImage} title={title} subTitle={subTitle}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center my-5">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-2">{title ? `Order ${title}` : "order offer item"}</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;