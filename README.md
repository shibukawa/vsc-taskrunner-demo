# VS Code Task Runner Demo

This repository is a small Node.js demo project for running VS Code `tasks.json` entries.

## Setup

```sh
npm install
```

## Tasks

- `build`: runs `vite build`
- `test`: runs `vitest run`
- `lint`: runs `oxlint .`

The same commands are exposed in [`.vscode/tasks.json`](/Users/shibukawayoshiki/develop/vsc-taskrunner-demo/.vscode/tasks.json).

## Expected branch status

- `main`: build, test, and lint succeed
- `dev`: build succeeds, test and lint fail
- `work`: build, test, and lint fail

## VS Code

Open the folder in VS Code and run the `build`, `test`, or `lint` task from the command palette or the terminal task UI.
