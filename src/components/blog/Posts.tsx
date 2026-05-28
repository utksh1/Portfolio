import { getPosts } from '@/utils/utils';
import { BlogPostCard } from '@/components/ui/card-18';
import { formatDate } from '@/utils/formatDate';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

const fallbackImages: Record<string, string> = {
    'chatgpt-to-api': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80',
    'nebula-cluster-render-workers': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80',
};

export function Posts({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: PostsProps) {
    let allBlogs = getPosts(['src', 'app', 'blog', 'posts']);

    const sortedBlogs = allBlogs.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length 
          )
        : sortedBlogs;

    return (
        <>
            {displayedBlogs.length > 0 && (
                <div
                    className={
                        columns === '3'
                            ? 'mb-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
                            : columns === '2'
                              ? 'mb-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2'
                              : 'mb-10 grid w-full grid-cols-1 gap-8'
                    }
                >
                    {displayedBlogs.map((post) => (
                        <BlogPostCard
                            key={post.slug}
                            variant={thumbnail || direction === 'column' ? 'featured' : 'default'}
                            tag={post.metadata.tag || 'Writing'}
                            date={`ON ${formatDate(post.metadata.publishedAt, false).toUpperCase()}`}
                            title={post.metadata.title}
                            description={post.metadata.summary}
                            href={`/blog/${post.slug}`}
                            imageUrl={post.metadata.image || fallbackImages[post.slug]}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
