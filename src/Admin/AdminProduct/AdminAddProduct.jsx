import React, { useState } from "react";
import { errorToast, successToast } from "../../Toast";
import axios from "axios";

function AddProduct() {
  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    price: "",
    productImage: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      console.log(formFields, "formFields");
      const response = await axios.post('');
      successToast("f");
    } catch (error) {
      errorToast(error.message || error.response.message || 'error!')
    }
  };

  return (
    <form className="w-[40%] ms-5 flex-col  " onSubmit={handleSubmit}>
      <div className="transition-all hover:bg-white hover:text-black mb-2 text-white spacing tracking-wide border border-white p-3 rounded-lg">
        <label className="block mb-1 text-sm font-medium ">Product Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className=" bg-transparent border-b-2 tracking-wider transition-all text-[##9e9796] block p-2.5 w-full text-sm  hover:text-black hover:placeholder:text-white   rounded-lg  border-gray-300 outline-none  dark:placeholder-gray-400 dark:text-white "
          placeholder="Name : "
          required
        />
      </div>
      <div className="transition-all hover:bg-white hover:text-black mb-2 text-white spacing tracking-wide border border-white p-3 rounded-lg">
        <label className="block mb-1 text-sm font-medium ">Price</label>
        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          className=" bg-transparent border-b-2 tracking-wider transition-all text-[##9e9796] block p-2.5 w-full text-sm  hover:text-black hover:placeholder:text-white   rounded-lg  border-gray-300 outline-none  dark:placeholder-gray-400 dark:text-white "

          required
        />
      </div>
      <div className="transition-all hover:bg-white hover:text-black mb-2 text-white spacing tracking-wide border border-white p-3 rounded-lg">
        <label className="block mb-1 text-sm font-medium ">Description</label>
        <textarea
          onChange={handleChange}
          name="description"
          rows="4"
          className=" bg-transparent border-b-2 tracking-wider transition-all text-[##9e9796] block p-2.5 w-full text-sm  hover:text-black hover:placeholder:text-white   rounded-lg  border-gray-300 outline-none  dark:placeholder-gray-400 dark:text-white "

          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="transition-all hover:bg-white hover:text-black mb-2 text-white spacing tracking-wide border border-white p-3 rounded-lg">
        <label className="block mb-1 text-sm font-medium ">Image</label>
        <input
          onChange={handleChange}
          className=" bg-transparent border-b-2 tracking-wider transition-all text-[##9e9796] block p-2.5 w-full text-sm  hover:text-black hover:placeholder:text-white   rounded-lg  border-gray-300 outline-none  dark:placeholder-gray-400 dark:text-white "

          id="file_input"
          type="file"
          name="productImage"
        ></input>
      </div>
      <button className="outline-none bg-white rounded-lg w-full  cursor-pointer font-semibold overflow-hidden relative z-100 border border-black group px-8 py-2">
        <span className="relative z-10 text-black group-hover:text-white text-xl duration-500">
          Magic !
        </span>

        <span className="absolute w-full h-full bg-black -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
        <span className="absolute w-full h-full bg-black -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
      </button>
    </form>
  );
}

export default AddProduct;
