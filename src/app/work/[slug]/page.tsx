import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, AvatarGroup, Button, Column, Flex, Heading, Media, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts(["src", "app", "work", "projects"])
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="l" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="16">
        <Button data-border="rounded" href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft" style={{ width: "fit-content" }}>
          Projects
        </Button>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title}
          src={post.metadata.images[0]}
        />
      )}
      <Flex fillWidth gap="40" direction="row" s={{ direction: "column" }} marginTop="24">
        {/* Left Side: Article Case Study */}
        <Flex flex={8} direction="column" as="article" minWidth="0">
          <CustomMDX source={post.content} />
        </Flex>

        {/* Right Side: Sticky Info Sidebar Panel */}
        <Flex
          flex={3}
          direction="column"
          gap="24"
          style={{
            position: "sticky",
            top: "100px",
            height: "fit-content",
            padding: "24px",
            background: "rgba(10, 10, 10, 0.35)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            backdropFilter: "blur(12px)"
          }}
        >
          {/* Section: Project Action Link */}
          {post.metadata.link && (
            <Column gap="8">
              <Text variant="label-default-s" onBackground="neutral-weak" style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Project Link
              </Text>
              <Button
                href={post.metadata.link}
                target="_blank"
                variant="primary"
                size="m"
                suffixIcon="arrowUpRightFromSquare"
                data-border="rounded"
                fillWidth
              >
                Launch Project
              </Button>
            </Column>
          )}

          {/* Section: Live Deployment Link */}
          {post.metadata.liveLink && (
            <Column gap="8">
              <Text variant="label-default-s" onBackground="neutral-weak" style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Live Deployment
              </Text>
              <Button
                href={post.metadata.liveLink}
                target="_blank"
                variant="secondary"
                size="m"
                suffixIcon="arrowUpRightFromSquare"
                data-border="rounded"
                fillWidth
              >
                View Live Demo
              </Button>
            </Column>
          )}

          {/* Section: Date */}
          <Column gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak" style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Published At
            </Text>
            <Text variant="body-default-m" onBackground="neutral-strong">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
          </Column>

          {/* Section: Contributors */}
          {post.metadata.team && post.metadata.team.length > 0 && (
            <Column gap="12">
              <Text variant="label-default-s" onBackground="neutral-weak" style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Contributors
              </Text>
              <Flex gap="12" direction="column">
                <AvatarGroup reverse avatars={avatars} size="m" />
                <Column gap="4">
                  {post.metadata.team.map((member) => (
                    <Text key={member.name} variant="body-default-s" onBackground="neutral-strong" style={{ fontWeight: 500 }}>
                      {member.name}
                    </Text>
                  ))}
                </Column>
              </Flex>
            </Column>
          )}
        </Flex>
      </Flex>
      <ScrollToHash />
    </Column>
  );
}
