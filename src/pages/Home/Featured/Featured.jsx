import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'
import './Feature.css'


const Featured = () => {
    return (
        <section className="feature-item mb-20 bg-fixed text-white">
            <div className="bg-gray-600 bg-opacity-50 py-10 mt-0">
                <SectionTitle subHeading={"Check it out"} heading={"Featured items"}></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-gray-600 bg-opacity-50 ">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Jan, 23, 2026</p>
                    <h3 className="uppercase">Where can i get some</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, illum possimus sint repellendus eius, consequuntur animi quaerat fuga velit voluptates numquam praesentium vero, incidunt nisi itaque earum rem ipsa similique sunt. Nam nisi architecto explicabo illum delectus ullam distinctio reiciendis exercitationem optio, tempora excepturi sint aut? Impedit, harum dolorem?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">Read more</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;