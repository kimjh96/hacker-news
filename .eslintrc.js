module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [2, { extensions: [".js", ".ts", ".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    camelcase: "off",
    "max-len": "off",
    "comma-dangle": ["error", "never"]
  },
  settings: {
    "import/resolver": { node: { extensions: [".js", ".ts", ".tsx"] } }
  }
};
