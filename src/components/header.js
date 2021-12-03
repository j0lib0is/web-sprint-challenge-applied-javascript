// ✅ TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>

const Header = (title, date, temp) => {
  // create DOM elements
  const articleHeader = document.createElement('div');
  const articleDate = document.createElement('span');
  const articleTitle = document.createElement('h1');
  const articleTemp = document.createElement('span');
  // build header
  articleHeader.appendChild(articleDate);
  articleHeader.appendChild(articleTitle);
  articleHeader.appendChild(articleTemp);
  // add classes
  articleHeader.classList.add('header');
  articleDate.classList.add('date');
  articleTemp.classList.add('temp');
  // add content
  articleDate.textContent = date;
  articleTitle.textContent = title;
  articleTemp.textContent = temp;
  // return header
  return articleHeader;
}

// ✅ TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.

const headerAppender = (selector) => {
  const container = document.querySelector(selector);
  container.appendChild(Header('The Future of Crypto', 'December 2, 2021', '72 degrees'));
}

export { Header, headerAppender }
