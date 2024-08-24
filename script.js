document.getElementById('cor').addEventListener('click', function() {
    const colors = ['#008080', '#191970', '#000000', '#FFFFFF', '#0000FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
