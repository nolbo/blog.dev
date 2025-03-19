import {MetadataRoute} from "next";
import path from "path";
import fs from "fs";
import {url} from "@/blog.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const dir = path.resolve("./posts");
  const filenames = fs.readdirSync(dir);

  let sitemapArr: MetadataRoute.Sitemap = [{
    url: url,
    lastModified: new Date()
  }];

  filenames.forEach((filename) => {
    sitemapArr.push({
      url: `${url}/${filename}`,
      lastModified: new Date()
    });
  });

  return sitemapArr;
}