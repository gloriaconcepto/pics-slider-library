import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true, 
  clean: true, 
  minify: true,
  target: "esnext",
  external: ["react", "react-dom"]
});