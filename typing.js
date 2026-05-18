const h1 = document.querySelector("h1");
const text = [
    'ح',
    'ل',
    'و',
    'ل',
    ' ',
    'ت',
    'ق',
    'ن',
    'ي',
    'ة',
    ' ',
    'ح',
    'د',
    'ي',
    'ث',
    'ة'
]

window.onload = () => {
        text.forEach((e, index) => {
            setTimeout(() => {
                h1.append(e);
            }, index * 150);
        });
}