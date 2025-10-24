import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: true,
      slidev: {
        files: [
          '**/slides.md',
          '**/slides.example.md',
          '**/template.md',
          '**/example.md',
        ],
      },
    },

    jsonc: true,

    overrides: {
      vue: {
        'vue/component-name-in-template-casing': 'off',
        'vue/no-v-text-v-html-on-component': 'off',
      },
    },

    stylistic: {
      indent: 2,
      quotes: 'single',
    },

    typescript: true,

    vue: true,

    yaml: true,
  },
  {
    files: [
      '**/*.html',
      '**/*.js',
      '**/*.json',
      '**/*.md',
      '**/*.toml',
      '**/*.ts',
      '**/*.vue',
      '**/*.xml',
      '**/*.yaml',
    ],

    ignores: [
    ],

    plugins: {
      perfectionist,
    },

    rules: {
      'antfu/consistent-chaining': [
        'off',
      ],
      'jsonc/sort-keys': [
        'error',
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
      'vue/attributes-order': [
        'error',
        {
          alphabetical: true,
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          multiline: 1,
          singleline: 3,
        },
      ],
    },
  },
)
