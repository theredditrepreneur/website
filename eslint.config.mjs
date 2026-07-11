import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  ...compat.extends("next/core-web-vitals"),
  { ignores: [".next/**", "out/**", "next-env.d.ts"] },
  { rules: { "react/no-unescaped-entities": "off" } },
];

export default config;
