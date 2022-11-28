const search = document.querySelector('.search');
const searchButton = search.querySelector('.search__button');
const searchInput = search.querySelector('.search__input');

searchButton.addEventListener('click', () => {
  if (search.classList.contains('search--opened')) {
    search.classList.remove('search--opened');
  } else {
    search.classList.add('search--opened');
    searchInput.focus();
  }
});
