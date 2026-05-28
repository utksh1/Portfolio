"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaCodeFork, FaUsers } from "react-icons/fa6";
import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const [stats, setStats] = useState<{ stars: number; forks: number; contributors: number } | null>(null);
  const [contributors, setContributors] = useState<{ src: string }[]>([]);

  useEffect(() => {
    if (!link) return;

    // Parse GitHub repository url
    const match = link.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return;

    const owner = match[1];
    const repo = match[2];

    const fetchStats = async () => {
      try {
        const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoResponse.ok) return;
        const repoData = await repoResponse.json();

        const contribResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`);
        let contributorsCount = 0;
        let top10Avatars: { src: string }[] = [];
        if (contribResponse.ok) {
          const contribData = await contribResponse.json();
          if (Array.isArray(contribData)) {
            contributorsCount = contribData.length;

            // Move utksh1 to the first position if present
            const userIndex = contribData.findIndex((c: any) => c.login?.toLowerCase() === "utksh1");
            if (userIndex > -1) {
              const [userObj] = contribData.splice(userIndex, 1);
              contribData.unshift(userObj);
            }

            top10Avatars = contribData.slice(0, 10).map((c: any) => ({ src: c.avatar_url }));
          }
        }

        setStats({
          stars: repoData?.stargazers_count || 0,
          forks: repoData?.forks_count || 0,
          contributors: contributorsCount,
        });
        setContributors(top10Avatars);
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
      }
    };

    fetchStats();
  }, [link]);

  return (
    <Column fillWidth gap="m">
      {images && images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {(contributors.length > 0 || avatars?.length > 0) && (
              <AvatarGroup avatars={contributors.length > 0 ? contributors : avatars} size="m" reverse />
            )}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            {stats && (
              <Flex gap="16" vertical="center" wrap paddingY="4">
                <Flex gap="4" vertical="center" style={{ color: "#e3b341" }}>
                  <FaStar size={14} />
                  <Text variant="label-default-s" style={{ fontWeight: 600 }}>{stats.stars} Stars</Text>
                </Flex>
                <Flex gap="4" vertical="center" style={{ color: "#58a6ff" }}>
                  <FaCodeFork size={14} />
                  <Text variant="label-default-s" style={{ fontWeight: 600 }}>{stats.forks} Forks</Text>
                </Flex>
                <Flex gap="4" vertical="center" style={{ color: "#3fb950" }}>
                  <FaUsers size={14} />
                  <Text variant="label-default-s" style={{ fontWeight: 600 }}>{stats.contributors} Contributors</Text>
                </Flex>
              </Flex>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
