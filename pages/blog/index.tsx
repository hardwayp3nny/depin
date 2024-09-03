import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { PageSEO } from '@/components/SEO';
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer';
import { InferGetStaticPropsType } from 'next';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

export const POSTS_PER_PAGE = 5;

export const getStaticProps = async () => {
  // 过滤掉有 parent 的文章，只显示根级文章
  const filteredPosts = sortedBlogPost(allBlogs).filter((post) => !post.parent) as Blog[];
  const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(filteredPosts),
      pagination,
    },
  };
};

export default function HomePage({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, headerTitle, description } = siteMetadata;

  return (
    <>
      <PageSEO title={`Home - ${headerTitle} - ${title}`} description={description} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title="All Posts" />
    </>
  );
}
