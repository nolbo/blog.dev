import {HTMLAttributes} from "react";
import Image from "next/image";

interface ArticleHeaderProps extends HTMLAttributes<HTMLElement> {
  article: Article;
}

export default function ArticleHeader({article}: ArticleHeaderProps) {
  const publishDate = new Date(article.publishDate);

  return (
    <section className={"w-full leading-normal section"}>
      <h1>{article.title}</h1>
      <div className={"align-middle"}>
        <div
          className={"text-sm text-description"}>{`${publishDate.getFullYear()}-${publishDate.getMonth() + 1}-${publishDate.getDate()}`}</div>
      </div>
    </section>
  );
}