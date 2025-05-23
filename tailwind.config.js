module.exports = {
    mode: 'jit',
    important: true,
    theme: {
        extend: {
            gridTemplateRows: {
                7: 'repeat(7, minmax(0, 1fr))',
            },
            fontFamily: {
                grotesk: ['Grotesk', 'sans-serif'],
            }
        },
    },
}
