import localFont from 'next/font/local';

export const glacialIndifference = localFont({
    src: [
        {
            path: '../public/fonts/glacial-indifference/GlacialIndifference-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/glacial-indifference/GlacialIndifference-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/glacial-indifference/GlacialIndifference-Italic.otf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--font-glacial',
    display: 'swap',
});

export const segoeUI = localFont({
    src: [
        {
            path: '../public/fonts/segoe-ui-this/segoeuithis.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/segoe-ui-this/segoeuithibd.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/segoe-ui-this/segoeuithisi.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/segoe-ui-this/segoeuithisz.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-segoe-ui',
    display: 'swap',
});

export const ubuntu = localFont({
    src: [
        {
            path: '../public/fonts/ubuntufont/ubuntu-font-family-0.83/Ubuntu-R.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/ubuntufont/ubuntu-font-family-0.83/Ubuntu-B.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/ubuntufont/ubuntu-font-family-0.83/Ubuntu-RI.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/ubuntufont/ubuntu-font-family-0.83/Ubuntu-BI.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../public/fonts/ubuntufont/ubuntu-font-family-0.83/Ubuntu-L.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/ubuntufont/ubuntu-font-family-0.83/Ubuntu-M.ttf',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-ubuntu',
    display: 'swap',
});