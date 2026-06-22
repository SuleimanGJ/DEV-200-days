// Mixed Exports
// Combining default and named exports
export const VERSION = "1.0.0";

function main() {
  console.log("Main function");
}

export { main as default }; // Alternative way to set default
