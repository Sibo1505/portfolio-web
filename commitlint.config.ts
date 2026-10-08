import type { UserConfig } from "@commitlint/types";

// Conventional Commits: https://www.conventionalcommits.org
const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
};

export default config;
