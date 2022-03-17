const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['index.html', 'form.html'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                primary: '#1e2324',
                secondary: '#969696',
                tertiary: '#ebeeee',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
