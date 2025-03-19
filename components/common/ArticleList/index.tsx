"use server";

import fs from "fs";
import path from "path";
import {readSync} from "to-vfile";
import {matter} from "vfile-matter";
import ArticleItem from "@/components/common/ArticleItem";

export default async function ArticleList() {
  const dir = path.resolve("./posts");
  const filenames = fs.readdirSync(dir);

  const articles = filenames.map((filename) => {
    const file = readSync(`./posts/${filename}/page.mdx`);
    matter(file);

    return {
      ...file.data.matter as Article,
      path: `/${filename}`,
    } as Article;
  }).sort((a, b) => {
    const timeA = new Date(a.publishDate).getTime();
    const timeB = new Date(b.publishDate).getTime();

    if (timeA === timeB) return 0;

    return (timeA > timeB) ? -1 : 1;
  });

  return (
    <div className={"flex flex-col"}>
      {
        articles.map((article, i) => (
          <ArticleItem key={i} articleTitle={article.title} description={article.description} image={article.image}
                       publishDate={new Date(article.publishDate)} path={article.path}/>
        ))
      }
    </div>
  );
}