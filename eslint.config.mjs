import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'], // Ensure ESLint uses the correct tsconfig for type checking
  },
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules
    'plugin:react/recommended', // Recommended React rules
    'plugin:react-native/all', // React Native rules
    'plugin:@typescript-eslint/recommended', // Recommended TypeScript rules
    'prettier', // Integrate Prettier to avoid conflicts
  ],
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': 'off', // React prop types are not needed with TypeScript
    'react/react-in-jsx-scope': 'off', // Not required with React 17 JSX transform
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused variables
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return type for function signatures
    'prettier/prettier': 'error', // Make Prettier issues show as ESLint errors
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
})
