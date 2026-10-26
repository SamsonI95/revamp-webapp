import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off", // Disable unused variable warnings
      "@typescript-eslint/no-unused-vars": "off", // Disable TypeScript-specific unused var warnings
      '@typescript-eslint/no-empty-object-type': 'off',
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off", 
      "@typescript-eslint/no-unused-expressions": "off",
      "react/no-unescaped-entities": "off"
    },
  },
];

export default eslintConfig;
