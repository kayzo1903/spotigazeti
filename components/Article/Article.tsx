"use client";
import { getData } from "@/utils/Fetchs";
import React, { useEffect, useState } from "react";
import PostBanner from "../Banners/PostBanner";
import Postscards from "../Cards/Postscards";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/utils/imagebuilder";
import ShareButton from "../Share/ShareButton";
import Link from "next/link";
import ArticleLoadingBlock from "../LoadingBlock/ArticleLoadingBlock";
import Skeleton from "react-loading-skeleton";

interface articleInterface {
  heading: string;
}

const Article: React.FC<articleInterface> = ({ heading }) => {
  const [post, setPost] = useState<PostInterfaces | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<PostInterfaces[]>([]);
  const slugUrl = post?.slug.current;
  const encodedUrl = encodeURIComponent(slugUrl || "/ligikuu");
  const url = `https://spotigazeti.vercel.app/Blog/Article/${encodedUrl}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts: PostInterfaces[] = await getData();
        const matchedPost = allPosts.find(
          (post) => post.slug.current === heading
        );
        setPost(matchedPost || null);

        if (matchedPost) {
          // Get the categories of the matched post
          const postCategories = matchedPost.categories.map((cat) => cat.title);

          // Filter related posts
          const related = allPosts.filter(
            (p) =>
              p.slug.current !== heading &&
              p.categories.some((cat) => postCategories.includes(cat.title))
          );
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, [heading]);

  if (!post) {
    return (
      <div className="w-full">
        <ArticleLoadingBlock />
      </div>
    );
  }

  return (
    <article className="container space-y-4">
      <div className="w-full">
        <header className="mb-4 lg:mb-6 space-y-4">
          <div className="w-full flex flex-nowrap items-center justify-between">
            <Link
              href={`/Blog/${post.categories[0].title}`}
              className="text-gray-800 text-sm leading-3 capitalize px-4 py-2 rounded-sm bg-text w-fit"
            >
              {post.categories[0].title}
            </Link>
            <div>
              <ShareButton link={url} />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-300 lg:mb-6 lg:text-4xl">
            {post.title}
          </h1>
          <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <Image
                className="mr-4 w-16 h-16 rounded-full"
                src={post.author.image.asset.url}
                alt={post.author.name}
                width={16}
                height={15}
              />
              <div>
                <p className="text-sm text-gray-500 capitalize">
                  {post.author.name}
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  educator & author at spotigazeti
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  <time>
                    {new Date(
                      post.publishedAt ?? new Date().toISOString()
                    ).toLocaleDateString()}
                  </time>
                </p>
              </div>
            </div>
          </address>
        </header>
        <div className="w-full rounded-lg h-96 relative shadow-lg py-4">
          <Image
            src={urlForImage(post.mainImage.asset.url)}
            alt={post.slug.current}
            loading="lazy"
            fill={true}
            style={{ objectFit: "cover" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
        </div>
        <div className="w-full prose md:prose-xl my-4">
          <PortableText value={post.body} />
        </div>
      </div>
     { relatedPosts.length > 0 ? <PostBanner postcategories="Related Posts" /> : "" }
      <div className="flex w-full flex-wrap justify-center md:justify-start items-start gap-4 h-fit py-4">
        {relatedPosts.map((relatedPost) => (
          <Postscards
            key={relatedPost.slug.current}
            category={relatedPost.categories[0].title}
            date={relatedPost.publishedAt}
            image={relatedPost.mainImage.asset.url}
            slug={relatedPost.slug.current}
            title={relatedPost.title}
          />
        ))}
      </div>
    </article>
  );
};

export default Article;
