module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
  extends: [
    'universe/native',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'import/no-named-as-default': 0,
        'import/no-cycle': 2,
        'import/order': [
          'warn',
          {
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
            groups: [
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              'object',
              'unknown',
              'type',
            ],
            pathGroups: [
              {
                pattern: 'react*',
                group: 'builtin',
              },
              {
                pattern: 'next*',
                group: 'builtin',
              },
              {
                pattern: 'next/**',
                group: 'builtin',
              },
              {
                pattern: '~/**',
                group: 'external',
                position: 'after',
              },
              {
                pattern: './*.style',
                group: 'sibling',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
          },
        ],
      },
    },
  ],
}
