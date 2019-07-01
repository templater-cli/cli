# Steps:

- 1.  Parse Argv (`lib/argv-parser/`).
- 2.  Check if the repository was downloaded (`lib/download-manager/check/`).
  - 1.  If there is no cache or if the `--reset-cache` option was passed, clone the repository (`lib/download-manager/clone/`).
  - 2.  If the repository is cached, use the cached version (`lib/download-manager/get-downloaded/`).
- 3.  Prompt the user (`lib/prompt/`).
- 4.  For each of the selected templates by the user:
  - 1.  Copy the template files to the current working directory (`li/copy-manager/`).
  - 2.  Install the template dependencies (**must ask for user permission first**).
