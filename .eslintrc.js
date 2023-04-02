module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:react-hooks/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json']
    },
    plugins: ['react', 'i18next', 'react-hooks'],
    rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'react/display-name': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/prop-types': 'off',
        'multiline-ternary': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off'
    }
}
