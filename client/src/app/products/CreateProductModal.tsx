import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "../(components)/Header";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseInt(value)
          : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="productName" className={labelCssStyles}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            className={inputStyles}
            required
          ></input>
          <label htmlFor="price" className={labelCssStyles}>
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="price"
            onChange={handleChange}
            className={inputStyles}
            min={1}
            max={Infinity}
            required
          ></input>
          <label htmlFor="stock quantity" className={labelCssStyles}>
            Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="stock quantity"
            onChange={handleChange}
            className={inputStyles}
            min={0}
            max={Infinity}
            required
          ></input>
          <label htmlFor="rating" className={labelCssStyles}>
            Rating
          </label>
          <input
            type="number"
            min={1}
            max={5}
            name="rating"
            placeholder="rating"
            onChange={handleChange}
            className={inputStyles}
            required
          ></input>

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 rounded-lg shadow-md text-white"
            >
              Create
            </button>
            <button
              className="px-4 py-2 bg-gray-200 shadow rounded-lg text-black"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
