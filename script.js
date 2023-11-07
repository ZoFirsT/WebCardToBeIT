tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

const btncolor = document.getElementById('toggleMode');
btncolor.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
});