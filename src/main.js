import { add, multiply } from "./math.js";

const app = document.querySelector("#app");
const debugValue = "lint should fail on dev";

if (app) {
  const result = add(20, 22);
  const brokenResult = multiply(6, 7);
  app.innerHTML = `
    <main>
      <h1>VS Code Task Runner Demo</h1>
      <p>20 + 22 = ${result}</p>
      <p>6 x 7 = ${brokenResult}</p>
      <p>Use the VS Code build, test, and lint tasks to inspect each branch.</p>
    </main>
  `;
}
