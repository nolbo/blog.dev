import path from "path";
import fs from "fs";
import {compile, evaluate, EvaluateOptions} from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {mdxComponents} from "@/mdx-components";
import {notFound} from "next/navigation";
import ArticleHeader from "@/components/common/ArticleHeader";
import {matter} from "vfile-matter";
import {readSync} from "to-vfile";

interface Param {
  id: string;
}

interface pageParams {
  params: Promise<Param>;
}

export function generateStaticParams() {
  const dir = path.resolve("./posts");
  const filenames = fs.readdirSync(dir);

  return filenames.map((filename) => ({id: filename}));
}

export default async function Page({params}: pageParams) {
  const {id} = await params;

  if (!fs.existsSync(`./posts/${id}/page.mdx`)) notFound();

  const { default: ArticleMDX } = await evaluate(fs.readFileSync(`./posts/${id}/page.mdx`), {
    jsx,
    jsxs,
    Fragment,
    remarkPlugins: [remarkGfm, remarkMath, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeSlug, rehypeKatex]
  } as Pick<EvaluateOptions, "jsx" | "jsxs" | "Fragment" | "remarkPlugins" | "rehypePlugins">);
  const file = readSync(`./posts/${id}/page.mdx`);
  matter(file);

  return (
    <>
      <ArticleHeader article={file.data.matter as Article}/>
      <ArticleMDX components={mdxComponents} />
    </>
  );
}