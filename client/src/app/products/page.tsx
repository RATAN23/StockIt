"use client";
import { useCreateProductMutation, useGetProductsQuery } from "@/state/api";
import React, { useState } from "react";
import Header from "../(components)/Header";
import { CirclePlus, SearchIcon } from "lucide-react";
import Rating from "../(components)/rating";
import CreateProductModal from "./CreateProductModal";
import Image from "next/image";

type ProductFormData = {
    name: string;
    price: number;
    stockQuantity: number;
    rating: number;
}

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsQuery(searchTerm);

  const [createProduct] = useCreateProductMutation();

  const handleCreateProduct = async (productData : ProductFormData) => {
    console.log(productData);
    await createProduct(productData);
  }

  if(isLoading){
    return <div className="py-4">Loading...</div>
  }


  if (isError || !products) {
    return (
      <div className="text-center font-semibold text-xl text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="mx-auto pb-5 w-full">

      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-4 text-gray-500 m-2" />
          <input
            className="w-full py-3 px-2 rounded bg-white"
            value={searchTerm}
            placeholder="Search Products"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <Header name="Products" />
        <button
          className="bg-blue-500 flex items-center  hover:bg-blue-700 text-gray-200 font-bold shadow-md rounded px-3 py-3"
          onClick={() => setIsModalOpen(true)}
        >
          <CirclePlus className="w-5 h-5 mr-2 !text-gray-200" /> Create product
        </button>
      </div>

        {/* Body products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
            {isLoading ? (<div className="py-4">Loading....</div>) : (
                products?.map((product) => (
                    <div key={product.productId} className="border shadow rounded-md p-4 max-w-full w-full mx-auto">
                        <div className="flex flex-col items-center">
                        <Image src={`https://s3-stockit-inventorymanagement.s3.ap-south-1.amazonaws.com/product${Math.floor(Math.random() *3) + 1}.png`} alt={product.name} width={50} 
              height={50} className="rounded-lg w-14 h-14"
              />
                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                            <p className="text-gray-800">{product.price.toFixed(2)}</p>
                            <div className="text-sm text-gray-600 mt-1">
                                Stock : {product.stockQuantity}
                            </div>
                            {product?.rating && (
                                <div className="flex items-center mt-2">
                                    <Rating rating={Number(product.rating) || 0}/>
                                </div>
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>

        {/* Modal */}
        <CreateProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreateProduct}/>
    </div>
  );
};

export default Products;
