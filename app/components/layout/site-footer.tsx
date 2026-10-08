import { Container } from "~/components/ui/container";

type SiteFooterProps = {
  // Passed in from the layout loader so server and client render the same value.
  year: number;
};

export function SiteFooter({ year }: SiteFooterProps) {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <Container className="py-6 text-sm text-gray-600 dark:text-gray-400">
        © {year} Sebastian Bergen
      </Container>
    </footer>
  );
}
