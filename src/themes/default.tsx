
const colors = {
    primary: '#2B1E55',
    white: '#fff',
    secondary: '#2EBBAB',
    light: '#99A0AD'
}


const theme = {

    text: colors.primary,
    primary: colors.primary,
    light: colors.light,
    header: {
        background: ["#2B1E55", "#191035"],
        color: '#fff',
        title: 'bold' 

    },
    button: {
        primary: {
            color: '#fff',
            background: colors.primary,
            border: '1px solid ' + colors.primary
        },
        secondary: {
            color: colors.white,
            background: colors.secondary,
            border: '1px solid ' + colors.secondary
        },
        primaryOutline: {
            color: colors.primary,
            background: colors.white,
            border: '1px solid ' + colors.primary
        }
    },
    card: {
        light: {
            title: colors.primary,
            subTitle: colors.light
        }
    }
    
}


export default theme;