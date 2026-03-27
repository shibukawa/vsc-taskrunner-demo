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
- `show-input`: demonstrates a task that reads VS Code inputs on `main`
- `demo-parallel`: runs two dependency tasks in parallel, then a join task
- `demo-sequence`: runs two dependency tasks in sequence, then a final task
- `demo-mixed`: runs the parallel branch and the sequence branch, then waits for both before finishing

The same commands are exposed in [`.vscode/tasks.json`](/Users/shibukawayoshiki/develop/vsc-taskrunner-demo/.vscode/tasks.json).

## Expected branch status

- `main`: build, test, and lint succeed
- `dev`: build succeeds, test and lint fail
- `work`: build, test, and lint fail

## VS Code

Open the folder in VS Code and run the `build`, `test`, or `lint` task from the command palette or the terminal task UI.

## Dependency Demo

The dependency demo tasks use [`scripts/task-step.mjs`](/Users/shibukawayoshiki/develop/vsc-taskrunner-demo/scripts/task-step.mjs) to print timestamps and sleep for a short time.

- `demo-parallel-left` and `demo-parallel-right` are dependencies of `demo-parallel`
- `demo-sequence-first` and `demo-sequence-second` are dependencies of `demo-sequence` with `dependsOrder: "sequence"`
- `demo-mixed` depends on both `demo-parallel` and `demo-sequence`, so it acts like a simple join after both branches finish
