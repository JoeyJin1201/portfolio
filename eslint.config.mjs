/* eslint-disable no-underscore-dangle */
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "airbnb", "prettier"],
    rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
      ],
      "react/jsx-filename-extension": [
        "error",
        { "extensions": [".jsx", ".tsx"] }
      ],
      "react/react-in-jsx-scope": "off"
    }
  }),
];

export default eslintConfig;
