import Image from "next/image";
import React from "react";

type BlogCardTypes = {
  featuredImage: string;
  title: string;
  metaData: string;
  shortDescription: string;
  tags: Tag[];
};

type Tag = {
  title: string;
  bgColor: string;
  textColor: string;
};

const BlogCard = ({
  featuredImage,
  title,
  metaData,
  shortDescription,
  tags,
}: BlogCardTypes) => {
  return (
    <div>
      <Image
        src={featuredImage}
        alt={`${title} featured image`}
        width={400}
        height={240}
      />
      <div className="pt-8 pb-6">
        <div className="text-sm text-[#667085] tracking-tight">{metaData}</div>
        <div className="flex justify-between items-center">
          <h3 className="font-blog font-bold text-blackblog py-3">{title}</h3>
          <Image
            src="/share-icon.svg"
            alt="share-icon"
            width={24}
            height={28}
          />
        </div>
        <div className="font-m text-[#667085]">{shortDescription}</div>
      </div>
      <div className="flex gap-4">
        {tags.map((tag) => (
          <div
            key={tag.title}
            className="px-2.5 py-px text-base font-medium rounded-2xl inline-block"
            style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
          >
            {tag.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
