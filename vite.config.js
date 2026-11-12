const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop();
const basePath = process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}/` : "/");

export default {
  base: basePath
};
