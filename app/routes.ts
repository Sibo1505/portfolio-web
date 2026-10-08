import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

// Central route config: maps URLs to route modules.
// `layout()` wraps its children in a shared UI (header/footer) without adding a URL segment.
export default [
  layout("routes/site-layout.tsx", [
    index("routes/home.tsx"),

    // Catch-all: must stay last so it only matches URLs no other route handles.
    route("*", "routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
