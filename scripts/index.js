/* global bookmarkList */

$(() => {
  bookmarkList.bindEventListeners();
  bookmarkList.render();
});

const mockData = [
  {
    title: 'Something',
    url: 'http://example.com',
    rating: 4,
    desc: 'Lorem ipsum etc',
    id: 1,
  },
  {
    title: 'Article on Cats',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium omnis reprehenderit beatae soluta sapiente optio repellat nulla ipsam, architecto harum in consectetur suscipit unde delectus atque. Ex a soluta eveniet?',
    url: 'http://google.com',
    rating: 3,
    id: 2,
  },
  {
    title: "Naughty Bookmark I shouldn't bookmark",
    url: 'http://bookmark.com',
    rating: 5,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium omnis reprehenderit beatae soluta sapiente optio repellat nulla ipsam, architecto harum in consectetur suscipit unde delectus atque. Ex a soluta eveniet?',
    id: 3,
  },
];

mockData.forEach(b => store.addBookmark(b));
console.log(store);