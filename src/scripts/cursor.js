const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  let x = e.x;
  let y = e.y;

  cursor.style.top = y + 'px';
  cursor.style.left = x + 'px';
});
