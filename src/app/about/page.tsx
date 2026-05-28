import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

import { TechSpotlightCard } from "@/components/about/TechSpotlightCard";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          className="s-flex-hide"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} fillWidth>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Flex className="s-flex-hide">
                                <Button
                                    key={item.link}
                                    href={item.link}
                                    prefixIcon={item.icon}
                                    label={item.name}
                                    size="s"
                                    weight="default"
                                    variant="secondary"
                                />
                            </Flex>
                            <Flex className="s-flex-show">
                                <IconButton
                                    size="l"
                                    key={`${item.name}-icon`}
                                    href={item.link}
                                    icon={item.icon}
                                    variant="secondary"
                                />
                            </Flex>
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${index}`} fillWidth marginBottom="32">
                    <Flex gap="16" vertical="center" marginBottom="16" fillWidth>
                      {experience.logo && (
                        <Avatar
                          size="m"
                          src={(experience.logo as any).src}
                          value={(experience.logo as any).value}
                          icon={(experience.logo as any).icon}
                        />
                      )}
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                    </Flex>

                    <Column 
                      fillWidth 
                      style={{ 
                        borderLeft: (experience.roles as any).length > 1 ? "2px solid var(--neutral-alpha-medium)" : "none",
                        marginLeft: "18px",
                        paddingLeft: "24px"
                      }}
                      gap="24"
                    >
                      {(experience.roles as any).map((role: any, roleIndex: number) => (
                        <Column key={`${role.title}-${roleIndex}`} fillWidth position="relative">
                          {(experience.roles as any).length > 1 && (
                            <div 
                              style={{
                                position: "absolute",
                                left: "-31px",
                                top: "6px",
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor: "var(--neutral-alpha-medium)",
                                border: "3px solid var(--page-background)"
                              }}
                            />
                          )}
                          <Flex fillWidth horizontal="between" vertical="end" marginBottom="4">
                            {role.link ? (
                              <a 
                                href={role.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.roleLink}
                              >
                                <Flex gap="4" vertical="center">
                                  <Text variant="heading-strong-m">
                                    {role.title}
                                  </Text>
                                  <Icon size="xs" name="arrowUpRight" onBackground="neutral-weak" />
                                </Flex>
                              </a>
                            ) : (
                              <Text variant="heading-strong-m">
                                {role.title}
                              </Text>
                            )}
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                              {role.timeframe}
                            </Text>
                          </Flex>
                          <Text variant="body-default-m" onBackground="neutral-weak" marginTop="4">
                            {role.description}
                          </Text>
                        </Column>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution: any, index: number) => (
                  <Flex key={`${institution.name}-${index}`} gap="16" fillWidth>
                    {institution.logo && (
                      <Avatar
                        size="m"
                        src={institution.logo.src}
                        value={institution.logo.value}
                        icon={institution.logo.icon}
                      />
                    )}
                    <Column fillWidth gap="8">
                      <Flex fillWidth horizontal="between" vertical="center" wrap gap="8">
                        <Text id={institution.name} variant="heading-strong-l">
                          {institution.name}
                        </Text>
                        {institution.duration && (
                          <Text variant="heading-default-xs" onBackground="neutral-weak">
                            {institution.duration}
                          </Text>
                        )}
                      </Flex>
                      
                      <Flex wrap gap="8" vertical="center">
                        {institution.degree && (
                          <Text variant="heading-strong-m" onBackground="neutral-strong">
                            {institution.degree}
                          </Text>
                        )}
                        {institution.gpa && (
                          <Tag variant="neutral" size="m">
                            {institution.gpa}
                          </Tag>
                        )}
                      </Flex>

                      {institution.description && (
                        <Text variant="body-default-m" onBackground="neutral-weak" marginTop="4">
                          {institution.description}
                        </Text>
                      )}
                    </Column>
                  </Flex>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Flex fillWidth gap="24" direction="column">
                {about.technical.skills.map((skill, index) => (
                  <TechSpotlightCard
                    key={`${skill.title}-${index}`}
                    title={skill.title}
                    tags={skill.tags || []}
                  />
                ))}
              </Flex>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
