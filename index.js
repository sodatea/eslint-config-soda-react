module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Use double quotes in JSX attributes, unless there're already double quotes in it
    // This is for consistency with HTML attributes
    'jsx-quotes': ['warn', 'prefer-double'],

    // `displayName` is only used by React in debugging messages
    // For unminified code, React can get this name from `Component.name`
    // For minified (production) code, this is not even necessary
    'react/display-name': 'off',

    // Forbid certain propTypes (`any`, `array`, `object`)
    // `array` and `object` can be replaced with `arrayOf` and `shape`, respectively
    'react/forbid-prop-types': ['warn', { forbid: ['any', 'array', 'object'] }],

    // Always omit `={true}` for boolean attributes in JSX
    // E.g. `var Hello = <Hello personal />`
    'react/jsx-boolean-value': ['warn', 'never'],

    // Closing bracket location in JSX must be aligned with the line containing the opening tag
    'react/jsx-closing-bracket-location': ['warn', {
      nonEmpty: 'line-aligned',
      selfClosing: 'line-aligned'
    }],

    // Enforce spaces inside of curly braces in JSX attributes
    // E.g. `<Hello name={firstname} />`
    // This is inconsistent with the rule `'object-curly-spacing': ['warn', 'always']` in eslint-config-soda
    // Because IMO the curly braces in JSX attributes are more like a replacement for HTML quotes
    // So they should not be regarded as normal JavaScript objects
    'react/jsx-curly-spacing': ['warn', 'never', { allowMultiline: false }],

    // Disallows spaces around the equal sign
    // E.g. `<Hello name={firstname} />`
    'react/jsx-equals-spacing': ['warn', 'never'],

    // The first property should always be placed on a new line when the properties are spread over multiple lines
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],

    // Ensures that any component or prop methods used to handle events are correctly prefixed
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],

    // Enfors indentation style to be 2 spaces
    'react/jsx-indent': ['warn', 2],    // eslint-disable-line no-magic-numbers

    // Enforce props indentation to be 2 spaces
    'react/jsx-indent-props': ['warn', 2],   // eslint-disable-line no-magic-numbers

    // Warn if an element that likely requires a key prop
    // -- namely, one present in an array literal or an arrow function expression
    // Personally speaking, I never found this rule to be useful
    'react/jsx-key': 'off',

    // The maximum of props on a single line is 2
    'react/jsx-max-props-per-line': ['warn', { maximum: 2 }],   // eslint-disable-line no-magic-numbers

    // A bind call or arrow function in a JSX prop will create a brand new function on every single render
    // This is bad for performance, as it will result in the garbage collector being invoked way more than is necessary
    // Unfortunately React ES6 classes do not autobind their methods like components created with the older React.createClass syntax
    // So it's better to disable this rule until the [decorator proposal](https://github.com/wycats/javascript-decorators/blob/master/README.md) turns official
    // (then you can use [autobind](https://www.npmjs.com/package/core-decorators#autobind) decorator to avoid manual binding)
    'react/jsx-no-bind': 'off',

    // Disallow duplicate props in a JSX element
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

    // If enabled, all literal strings appeared in a JSX element would
    // need to be wrapped in a JSX container (`{'TEXT'}`), which, IMO, is not necessary.
    'react/jsx-no-literals': 'off',

    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'error',

    // Enforce props alphabetical sorting
    'react/jsx-sort-props': ['off', {
      ignoreCase: false,
      callbacksLast: true,    // callbacks must be listed after all other props
      shorthandFirst: true
    }],

    // Enforce spaces before the closing bracket of self-closing JSX elements
    'react/jsx-space-before-closing': ['warn', 'always'],

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'warn',

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'warn',

    // Prevent usage of dangerous JSX properties
    // see: https://facebook.github.io/react/tips/dangerously-set-inner-html.html
    'react/no-danger': 'warn',

    // Prevent usage of deprecated methods
    'react/no-deprecated': 'warn',

    // Prevent usage of `setState` in `componentDidMount`, which can lead to property/layout thrashing
    'react/no-did-mount-set-state': ['error', 'allow-in-func'],

    // Prevent usage of `setState` in `componentDidUpdate`, which can lead to property/layout thrashing
    'react/no-did-update-set-state': ['error', 'allow-in-func'],

    // NEVER mutate `this.state` directly, treat it as if it were immutable
    'react/no-direct-mutation-state': 'error',

    // isMounted is an anti-pattern, is not available when using ES6 classes
    // And it is on its way to being officially deprecated
    'react/no-is-mounted': 'error',

    // Declaring only one component per file improves readability and reusability of components
    'react/no-multi-comp': 'warn',

    // Prevent usage of `setState`, use Flux/Reflux/Redux instead
    // Small components don't need this
    // Should be turned manually for large applications
    'react/no-set-state': 'off',

    // Using a string (instead of a callback) as a ref prop on any component is considered legacy in the official documentation
    'react/no-string-refs': 'warn',

    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'warn',

    // Prefer ES6 class to `React.creatClass`
    'react/prefer-es6-class': ['warn', 'always'],

    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 'off',

    // Prevent missing props validation in a React component definition
    'react/prop-types': ['error', { ignore: [], customValidators: [] }],

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // It's up to the loader to decide whether the extension is required or not
    'react/require-extension': 'off',

    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',

    // Components without children can be self-closed to avoid unnecessary extra closing tag
    'react/self-closing-comp': 'warn',

    // Enforce component methods order
    // The default ordering is listed on <https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md>
    'react/sort-comp': ['warn', {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        'rendering'
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render'
        ]
      }
    }],

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['off', {
      ignoreCase: true,
      callbacksLast: true,
      requiredFirst: true
    }],

    // Wrapping multiline JSX in parentheses can improve readability and/or convenience
    'react/wrap-multilines': 'warn'
  }
}
