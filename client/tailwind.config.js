module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: '#0F1932',
                    light: '#14264C',
                    transparent: '#E0E7FF',
                },
                secondary: {
                    light: '#FAFAFA',
                    dark: '#F0F0F0',
                },
                pink: '#FF0468',
                // ...
            },
            backgroundImage: (theme) => ({
                header1: "url('/src/assets/images/m1.jpeg')",
            }),
        },
    },
    variants: {},
    plugins: [],
};
