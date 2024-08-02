import React from "react";
import Section from "../components/Section";
import { contentStore } from "@/store/contentStore";
import { observer } from "mobx-react-lite";
import useContent from "@/hooks/useContentHook";
import Image from "next/image";

type ProductsSectionProps = {
  data: any;
};

const ProductsSection = ({ data }: ProductsSectionProps) => {
  const { contentRef, sectionRef, scrollToContent, scrollToSection } =
    useContent(data);

  return (
    <>
      <Section
        sectionRef={sectionRef}
        onClick={scrollToContent}
        id={data.type}
        backgroundImage={data.backgroundImage}
      />

      {contentStore.name === data.type && (
        <section
          id={data.type}
          ref={contentRef}
          className="bg-black text-white py-10 px-8 min-h-screen"
        >
          <div className="flex w-full justify-center mb-10 mt-20">
            <button onClick={scrollToSection} className="circle-button">
              -
            </button>
          </div>
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              {data.title}
            </h2>
            <p className="text-gray-300 mb-12 text-center">
              {data.description}
            </p>

            {data.categories.map((category: any, categoryIndex: number) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-xl font-semibold mb-6">
                  {category.categoryTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map(
                    (product: any, productIndex: number) => (
                      <div
                        key={productIndex}
                        className="rounded-lg p-6 border border-gray-700"
                      >
                        <h4 className="text-lg font-semibold mb-2">
                          {product.name}
                        </h4>
                        <p className="text-gray-300 mb-4">
                          {product.description}
                        </p>
                        <p className="text-lg font-bold mb-4">
                          {product.price}
                        </p>
                        <a
                          href={product.url}
                          className="text-blue-400 hover:underline"
                        >
                          View Product
                        </a>
                        <Image
                          src={product.url}
                          width={300}
                          height={300}
                          alt={product.name}
                          className=" 
                        "
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default observer(ProductsSection);
