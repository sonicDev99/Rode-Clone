/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                lightGray: '#AEAEAE',
                mainClr: '#AD9970',
                grayTextCrl: '#FFFFFF80',
                cardClr: '#212529',
                pClr: '#00000080',
            },
        },
    },
    plugins: [],
};
