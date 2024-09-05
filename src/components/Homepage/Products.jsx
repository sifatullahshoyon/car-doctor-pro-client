import React from 'react';
import SectionTitle from "../shared/SectionTitle";
import BtnOutline from "../shared/Buttons/BtnOutline";
import { productsData } from '@/src/lib/products';
import ProductsCard from '../Cards/ProductsCard';

const Products = () => {
    return (
        <section className="my-32">
      <SectionTitle
        heading="Popular Products"
        title="Browse Our Products"
        description="the majority have suffered alteration in some form, by injected humour, or randomised <br> words which don't look even slightly believable."
      />
      <div
        data-aos="fade-up"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
      >
        {productsData?.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-12 ">
        <BtnOutline className='mx-auto text-center'>More Services</BtnOutline>
      </div>
    </section>
    );
};

export default Products;