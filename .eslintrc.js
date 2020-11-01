module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NOVE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NOVE_ENV === 'production' ? 'error' : 'off'
    }
}
