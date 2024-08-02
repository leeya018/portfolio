import { Article } from "@/interfaces/Article";
import React from "react";

type ArticleCardProps = {
  article: Article | null;
};
const ArticleCard = ({ article }: ArticleCardProps) => {
  if (!article) return;
  const { title, intro, painPoints, desires, transformation } = article;
  return (
    <article className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-12 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
        {title}
      </h1>

      <section className="mb-6">
        <p className="text-gray-600 text-lg leading-relaxed">{intro}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
          Pain Points
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {painPoints.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
          What You Want to Achieve
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {desires.map((desire, index) => (
            <li key={index} className="mb-2">
              {desire}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
          Your Transformation Journey
        </h2>
        <p className="text-gray-600 leading-relaxed">{transformation}</p>
      </section>
    </article>
  );
};

export default ArticleCard;
