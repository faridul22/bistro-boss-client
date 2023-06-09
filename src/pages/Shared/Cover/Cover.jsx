import { Parallax } from 'react-parallax';


const Cover = ({ image, title, subTitle, description }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero h-[700px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-6xl font-medium uppercase">{title}</h1>
                            <p className="mb-5 uppercase">{subTitle}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;