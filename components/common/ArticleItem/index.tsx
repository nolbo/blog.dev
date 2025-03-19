import {HTMLAttributes} from "react";
import {Link} from "react-transition-progress/next";
import Image from "next/image";

interface ArticleListProps extends HTMLAttributes<HTMLElement> {
  articleTitle: string;
  description: string;
  image: string;
  publishDate: Date;
  path?: string;
}

export default function ArticleItem({articleTitle, description, image, publishDate, path}: ArticleListProps) {
  return (
    <li className={"list-none py-[16px] rounded-lg [&:hover_.title]:underline"}>
      <Link href={path || ""} className={"flex gap-[16px] hover:no-underline"}>
        <div className={"flex-1"}>
          <span className={"title block text-lg text-default font-bold mb-[4px]"}>{articleTitle}</span>
          <span className={"block text-base text-description"}>{description}</span>
          <span className={"block align-middle mt-[12px] text-sm text-description"}>
                        {`${publishDate.getFullYear()}-${publishDate.getMonth() + 1}-${publishDate.getDate()}`}
                    </span>
        </div>
        <div>
          <Image src={image} alt={articleTitle} width={192} height={120}
                 className={"rounded-md w-[96px] h-[60px] md:w-[192px] md:h-[120px]"}/>
        </div>
      </Link>
    </li>
  );
}