import {NextConfig} from "next";
import nextMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**',
      },
    ],
  },
  experimental: {
    mdxRs: true,
    turbo: {
      rules: {
        "*.mdx": ["@mdx-js/loader"],
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js"
        }
      }
    }
  }
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      ["remark-gfm", { strict: true, throwOnError: true }],
      ["remark-math", { strict: true, throwOnError: true }],
      ["remark-frontmatter", { strict: true, throwOnError: true }],
      ["remark-mdx-frontmatter", { strict: true, throwOnError: true }]
    ],
    rehypePlugins: [
      ["rehype-slug", { strict: true, throwOnError: true }],
      ["rehype-katex", { strict: true, throwOnError: true }]
    ],
  }
});

export default withMDX(nextConfig);
