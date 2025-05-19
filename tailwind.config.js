module.exports = {
    mode: 'jit',
    important: true,
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateRows: {
                7: 'repeat(7, minmax(0, 1fr))',
            },
        },
    },
}
