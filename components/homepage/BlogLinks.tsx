import Link from '@/components/Link';
import Twemoji from '@/components/Twemoji';

const BlogLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <Link href="/blog" className="hover:underline">
          <Twemoji emoji="memo" />
          <span data-umami-event="home-link-blog" className="ml-1.5">
            My writings
          </span>
        </Link>
        <Link href="/projects" className="hover:underline">
          <Twemoji emoji="hammer-and-wrench" />
          <span data-umami-event="home-link-projects" className="ml-1.5">
            What have I built?
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5">



      </div>
    </div>
  );
};

export default BlogLinks;
