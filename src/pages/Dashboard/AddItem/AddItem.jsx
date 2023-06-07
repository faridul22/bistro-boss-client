
import { Helmet } from 'react-helmet-async';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'canter',
                                    icon: 'success',
                                    title: 'New Item Added Successful',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
        // console.log(data)
    };
    // console.log(img_hosting_token)
    return (
        <div className='w-full px-10'>
            <Helmet>
                <title>Bistro Boss | Add an Item</title>
            </Helmet>
            <SectionTitle subHeading="Whats new?" heading="Add an item"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name*</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("name", { required: true, maxLength: 120 })} />
                    </div>
                    <div className='flex'>
                        {/* category input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option>Drinks</option>
                                <option>Dessert</option>
                            </select>
                        </div>
                        {/* price input */}
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full" {...register("price", { required: true })} />
                        </div>
                    </div>
                    {/* recipe info input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    {/* item image input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Item image*</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full" />
                    </div>
                    {/* submit btn */}
                    <input className="btn btn-sm bg-black text-white" type="submit" value="Add item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;