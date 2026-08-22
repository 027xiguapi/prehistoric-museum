import eslint from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist',
      'dist-model-still',
      '.next',
      'out',
      'next-env.d.ts',
      '.handoff',
      '.wayfinder',
      'assets/candidates',
      '1048动物',
      'converted-1048',
      'docs/handoff',
      'docs/research',
      'docs/specification',
      'prototypes',
      'spikes',
      'tools',
      // Capacitor native projects and their copied web bundles.
      'android',
      'ios',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [eslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  {
    // App Router layouts/pages routinely export metadata and route constants
    // alongside components; fast-refresh warnings do not apply there.
    // CategoryPageView is a server-only component doing the same.
    files: [
      'app/**/*.{ts,tsx}',
      'src/components/CategoryPageView.tsx',
      // MuseumExperience.tsx owns the shared exhibit core and its client entry
      // contract types/helpers (AppPageKind, InitialAppState, path parsing).
      'src/MuseumExperience.tsx',
    ],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
)
