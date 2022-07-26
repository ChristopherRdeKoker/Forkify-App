// import { preventExtensions } from 'core-js/core/object';

class SearchView {
  parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.parentEl.querySelector('.search__field').value;
    this.clearInput();
    return query;
  }

  clearInput() {
    this.parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler(); //whyyyyyyy <-
    });
  }
}

export default new SearchView();
