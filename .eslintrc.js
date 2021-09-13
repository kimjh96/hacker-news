module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["airbnb", "plugin:@typescript-eslint/recommended", "prettier"],
  ignorePatterns: ["build/"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    camelcase: "off",
    "no-alert": "off",
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
    "max-len": "off",
    "comma-dangle": ["error", "never"],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false
        }
      }
    ]
  },
  settings: {
    "import/resolver": { node: { extensions: [".js", ".ts", ".tsx"] } }
  }
};
