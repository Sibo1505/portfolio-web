import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";

import NotFound, { loader } from "./not-found";

describe("not-found route", () => {
  it("responds with HTTP status 404", () => {
    const result = loader();

    expect(result.init?.status).toBe(404);
  });

  it("renders a link back to the home page", async () => {
    // createRoutesStub provides the router context that <Link> needs.
    const Stub = createRoutesStub([{ path: "/unknown", Component: NotFound }]);
    render(<Stub initialEntries={["/unknown"]} />);

    const link = await screen.findByRole("link", { name: "Zur Startseite" });
    expect(link).toHaveAttribute("href", "/");
  });
});
