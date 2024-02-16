module.exports = {
    extends: [
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "simple-import-sort"],
    root: true,
    rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "max-len": ["error", { code: 180 }],
        "no-unused-vars": ["error", { argsIgnorePattern: "req|res|next" }],
        "prettier/prettier": [
            "error",
            {
                printWidth: 180,
            },
        ],
    },
};

