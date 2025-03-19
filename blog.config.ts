import {Metadata} from "next";

export const url = "https://blog.dev";
export const metadata: Metadata = {
  title: {
    default: "Blog.dev",
    template: "%s | Blog.dev"
  },
  description: "Blog template for anyone",
  openGraph: {
    siteName: "Blog.dev",
    images: {
      url: `${url}/ogimage.png`
    },
    type: "website",
    locale: "ko-KR",
    title: {
      default: "Blog.dev",
      template: "%s | Blog.dev"
    },
    url: url,
  },
}