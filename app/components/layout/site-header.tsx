import { Link } from "react-router";

import { Container } from "~/components/ui/container";

export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <Container className="flex h-16 items-center">
        <Link to="/" className="font-semibold">
          Sebastian Bergen
        </Link>
      </Container>
    </header>
  );
}
