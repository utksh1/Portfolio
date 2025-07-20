import { Column, Heading, Text, Button, Flex } from "@once-ui-system/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Flex style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)" }} horizontal="center" vertical="center">
      <Column as="section" fill padding="40" style={{ background: "#fff", borderRadius: "18px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", maxWidth: 400, margin: 24 }}>
        {/* Simple SVG illustration */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 24 }}>
          <circle cx="40" cy="40" r="38" fill="#e0e7ef" />
          <ellipse cx="40" cy="55" rx="18" ry="6" fill="#cbd5e1" />
          <rect x="28" y="32" width="24" height="8" rx="4" fill="#fff" />
          <circle cx="34" cy="36" r="2" fill="#64748b" />
          <circle cx="46" cy="36" r="2" fill="#64748b" />
        </svg>
        <Text marginBottom="s" variant="display-strong-xl" style={{ color: "#64748b" }}>
          404
        </Text>
        <Heading marginBottom="l" variant="display-default-xs" style={{ color: "#334155" }}>
          Page Not Found
        </Heading>
        <Text onBackground="neutral-weak" marginBottom="l" style={{ color: "#64748b" }}>
          Oops! The page you are looking for does not exist or has been moved.
        </Text>
        <Link href="/" passHref legacyBehavior>
          <Button variant="primary" size="m" style={{ width: "100%" }}>
            Go Home
          </Button>
        </Link>
      </Column>
    </Flex>
  );
}
