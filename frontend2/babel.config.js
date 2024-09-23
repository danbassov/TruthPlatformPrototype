// Configure Babel, a JS compiler to transform modern JS into version compatible with older environments
module.exports = {
    presets: [
        '@babel/preset-env', // Tranform modern JS
        '@babel/preset-react' // Transform React-specific JSX code
    ],
    plugins: [
        '@babel/plugin-transform-optional-chaining'
    ]
};