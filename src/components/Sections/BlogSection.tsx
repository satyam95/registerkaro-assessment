import Image from "next/image";
import React from "react";
import BlogCard from "../BlogCard";

const BLOG_DATA = [
  {
    id: 1,
    featuredImage: "/blog1.png",
    title: "Small business & Startup",
    metaData: "Prabhash Mishra • 1 Jan 2023 • Today",
    shortDescription:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: [
      {
        title: "Tax & Audit",
        bgColor: "#F9F5FF",
        textColor: "#6941C6",
      },
      {
        title: "Management",
        bgColor: "#F8F9FC",
        textColor: "#363F72",
      },
    ],
  },
  {
    id: 2,
    featuredImage: "/blog2.png",
    title: "Scale-Up Company Offer",
    metaData: "Mahesh Kumar • 1 Jan 2023",
    shortDescription:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: [
      {
        title: "Tax",
        bgColor: "#F0F9FF",
        textColor: "#026AA2",
      },
      {
        title: "Research",
        bgColor: "#EEF4FF",
        textColor: "#3538CD",
      },
      {
        title: "Complience",
        bgColor: "#FFF6ED",
        textColor: "#C4320A",
      },
    ],
  },
  {
    id: 3,
    featuredImage: "/blog3.png",
    title: "Growing Business Package",
    metaData: "Rakhi Verma • 1 Jan 2023",
    shortDescription:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: [
      {
        title: "Audit",
        bgColor: "#F9F5FF",
        textColor: "#6941C6",
      },
      {
        title: "Money Back",
        bgColor: "#EEF4FF",
        textColor: "#3538CD",
      },
    ],
  },
  {
    id: 4,
    featuredImage: "/blog4.png",
    title: "Scale-Up Company Offer",
    metaData: "Karan Kumar • 1 Jan 2023",
    shortDescription:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: [
      {
        title: "Money",
        bgColor: "#F9F5FF",
        textColor: "#6941C6",
      },
      {
        title: "Management",
        bgColor: "#F8F9FC",
        textColor: "#363F72",
      },
    ],
  },
  {
    id: 5,
    featuredImage: "/blog5.png",
    title: "Scale-Up Company Offer",
    metaData: "Richa Singh • 1 Jan 2023",
    shortDescription:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: [
      {
        title: "Tax Return",
        bgColor: "#ECFDF3",
        textColor: "#027A48",
      },
      {
        title: "News",
        bgColor: "#FDF2FA",
        textColor: "#C11574",
      },
      {
        title: "Audit",
        bgColor: "#FFF1F3",
        textColor: "#C01048",
      },
    ],
  },
  {
    id: 6,
    featuredImage: "/blog6.png",
    title: "Scale-Up Company Offer",
    metaData: "Miss Nora• 1 Jan 2023",
    shortDescription:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: [
      {
        title: "Private Limited Company",
        bgColor: "#F9F5FF",
        textColor: "#6941C6",
      },
      {
        title: "Customer Success",
        bgColor: "#F8F9FC",
        textColor: "#363F72",
      },
    ],
  },
];

const BlogSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-9">
          <div className="text-center text-yellowlight font-sm pb-1.5">
            EXPLORE OUR BLOGS
          </div>
          <h2 className="text-center font-bold font-h2-dark text-copper">
            Accelerate Digital Transformation
          </h2>
          <div className="py-12">
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
              {BLOG_DATA.map((blog) => (
                <BlogCard
                  key={blog.id}
                  featuredImage={blog.featuredImage}
                  title={blog.title}
                  metaData={blog.metaData}
                  shortDescription={blog.shortDescription}
                  tags={blog.tags}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-tertiary text-white font-m font-semibold flex gap-1.5 py-3 px-5 rounded-md border border-[#E5E5E7] shadow-btn">
              Show more blogs
              <Image
                src="/arrow-right.svg"
                alt="right arrow"
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
