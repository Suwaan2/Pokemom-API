let listVisible = false;

function toggleList() {
  const ul = document.getElementById('vis');

  if (listVisible) {
    ul.style.opacity = '0';
  } else {
    ul.style.opacity = '1';
  }

  listVisible = !listVisible;
}