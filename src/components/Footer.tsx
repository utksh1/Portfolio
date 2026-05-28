import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social, home, about, blog, work, gallery } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      paddingY="32"
      paddingX="16"
      horizontal="center"
      style={{
        borderTop: "1px solid var(--neutral-alpha-medium)",
        marginTop: "64px"
      }}
    >
      <Flex
        className={styles.footerContainer}
        maxWidth="l"
        fillWidth
        horizontal="between"
        vertical="start"
        gap="32"
        s={{ direction: "column", horizontal: "center", gap: "24" }}
      >
        {/* Left Side: Brand and Copyright */}
        <Flex direction="column" gap="8" s={{ horizontal: "center", textAlign: "center" }}>
          <Text variant="heading-strong-s" onBackground="neutral-strong">
            {person.name}
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak" marginTop="8">
            © {currentYear} {person.name}. All rights reserved.
          </Text>
        </Flex>

        {/* Right Side: Links and Socials */}
        <Flex direction="column" gap="16" horizontal="end" s={{ horizontal: "center", gap: "16" }}>
          {/* Nav Links */}
          <Flex gap="24" wrap s={{ gap: "16", horizontal: "center" }}>
            <SmartLink href={home.path} style={{ textDecoration: "none" }}>
              <Text variant="body-default-s" onBackground="neutral-weak" className={styles.footerLink}>
                {home.label}
              </Text>
            </SmartLink>
            <SmartLink href={about.path} style={{ textDecoration: "none" }}>
              <Text variant="body-default-s" onBackground="neutral-weak" className={styles.footerLink}>
                {about.label}
              </Text>
            </SmartLink>
            <SmartLink href={work.path} style={{ textDecoration: "none" }}>
              <Text variant="body-default-s" onBackground="neutral-weak" className={styles.footerLink}>
                {work.label}
              </Text>
            </SmartLink>
            <SmartLink href={blog.path} style={{ textDecoration: "none" }}>
              <Text variant="body-default-s" onBackground="neutral-weak" className={styles.footerLink}>
                {blog.label}
              </Text>
            </SmartLink>
            <SmartLink href={gallery.path} style={{ textDecoration: "none" }}>
              <Text variant="body-default-s" onBackground="neutral-weak" className={styles.footerLink}>
                {gallery.label}
              </Text>
            </SmartLink>
          </Flex>

          {/* Social Icons */}
          <Flex gap="12">
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    size="s"
                    variant="ghost"
                  />
                ),
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
