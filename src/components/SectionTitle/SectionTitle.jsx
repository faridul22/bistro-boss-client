

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=" w-3/12 md:mx-auto text-center mb-5">
            <p className=" text-yellow-500">--- {subHeading} ---</p>
            <h3 className="uppercase border-y-4 py-4 text-3xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;