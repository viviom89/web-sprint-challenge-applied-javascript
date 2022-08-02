const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardArticle = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgContainer = document.createElement("div");
  const cardAuthorPhoto= document.createElement("img");
  const cardAuthorName = document.createElement("span");
  
  cardArticle.appendChild(cardHeadline);
  cardArticle.appendChild(cardAuthor);
  cardArticle.appendChild(cardImgContainer);
  cardArticle.appendChild(cardAuthorPhoto);
  cardArticle.appendChild(cardAuthorName);

  cardArticle.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");
  cardAuthorPhoto.classList.add("authorPhoto");
  cardAuthorName.classList.add("authorName");
  

  cardHeadline.textContent = headline;
  cardAuthorPhoto.textContent = authorPhoto;
  cardAuthorName.textContent = authorName;
  
  return cardArticle;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
