let allBooksHTML = ``;

// Loop through each book type and build the HTML structure dynamically
bookTypes.forEach(function (book) {
  allBooksHTML += `
    <div class="details-of-items">
        <div class="the-images">
            <img src="${book.image}">
        </div>            

        <div>${book.name}</div>

        <div>
            <label for="">Pages</label>
            <select class="page-selector js-page-selector">
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="350">350</option>
                <option value="500">500</option>
                <option value="750">750</option>
                <option value="1000">1000</option>
            </select>
        </div>

        <div>GH¢${(book.priceInCedis/100).toFixed(2)}/per 100pg copy</div>

        <div>
            <label for="">Total Books</label>
            <input type="number" placeholder="Number of books" class="book-count-input js-book-count-input">
        </div>

        <div class="added-to-wishlist js-added-to-wishlist">Added</div>

        <div class="wishlist js-wishlist" data-book-name="${book.name}">
            Wishlist
        </div>
    </div>`;
});

let bookContainer = document.querySelector(".all-items-container");
bookContainer.innerHTML = allBooksHTML;

let wishlistButtons = document.querySelectorAll(".js-wishlist");

wishlistButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let selectedBookName = button.dataset.bookName;

    let numPages = button.closest('.details-of-items');
    let pages = Number(numPages.querySelector('.js-page-selector').value);
    
    let bookQuantity = Number(numPages.querySelector('.js-book-count-input').value) || 1;

    let existingWishlistItem = products.find(item=>{
      selectedBookName = item.selectedBookName;
    });

    if (existingWishlistItem) {
      existingWishlistItem.totalInWishlist++;
    } else {
      products.push({
        selectedBookName,
        totalInWishlist:1,
        NumberofPages: pages,
        bookQuantity
      });
    }
    
    console.log(products);

    let totalQuantity = 0;
    products.forEach((item) => {
      totalQuantity += item.totalInWishlist;
    });

    let navQuantityDisplay = document.querySelector(".js-nav-quantity");
    navQuantityDisplay.innerHTML = `<a href="wishlist.html">Wishlist(${totalQuantity})</a>`;
  });
});

