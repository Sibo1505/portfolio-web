import { data, Link } from "react-router";

import { Container } from "~/components/ui/container";

import type { Route } from "./+types/not-found";

// Respond with a real 404 status code (important for SEO), while still rendering
// this page inside the site layout instead of the generic error boundary.
export function loader(_args: Route.LoaderArgs) {
  return data(null, { status: 404 });
}

export function meta(_args: Route.MetaArgs) {
  return [{ title: "Seite nicht gefunden – Sebastian Bergen" }];
}

export default function NotFound() {
  return (
    <Container className="pt-16">
      <p className="text-sm font-medium text-gray-500">404</p>
      <h1 className="mt-2 text-3xl font-semibold">Seite nicht gefunden</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Die Seite, die du suchst, existiert nicht oder wurde verschoben.
      </p>
      <Link to="/" className="mt-6 inline-block underline underline-offset-4">
        Zur Startseite
      </Link>
    </Container>
  );
}
