const [label = "step", delayArg = "0"] = process.argv.slice(2);
const delay = Number.parseInt(delayArg, 10) || 0;

const now = () => new Date().toISOString();

console.log(`[${now()}] start ${label} (${delay}ms)`);

await new Promise((resolve) => {
  setTimeout(resolve, delay);
});

console.log(`[${now()}] end ${label}`);
