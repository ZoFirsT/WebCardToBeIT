window.onload = function() {
  const btncolor = document.getElementById('toggleMode');
  btncolor.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
  });
};
