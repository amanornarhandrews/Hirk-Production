let booksHTML = ``;

bookTypes.forEach(function (theBooks) {
  booksHTML += `
            <div class="details-of-items">
            <div class="the-images"><img src="${
              theBooks.image
            }"></div>            
            <div>${theBooks.name}</div>
            <div>
                <label for="">Pages</label>
                <select name="" class="js-quantity-selector">
                    <option value="25">Less than 25</option>
                    <option value="50">50 - 75</option>
                    <option value="100">More than 100</option>
                    <option value="150">More than 150</option>
                    <option value="200">More than 250</option>
                    <option value="500">More than 500</option>
                    <option value="1000">1000 plus</option>
                </select>
            </div>
            <div>GH¢${(theBooks.priceInCedis / 100).toFixed(2)}/per 100pg copy</div>
            <div>
                <label for="">Total Books</label>
                <input type="number" placeholder="Number of books" id="numBooks">
            </div>
            <div class="wishlist js-wishlist" data-addToWishlist="${
              theBooks.name
            }">Wishlist</div>
        </div>`;
});
let allItemContainer = document.querySelector(".all-items-container");
allItemContainer.innerHTML = booksHTML;

let wishlist = document.querySelectorAll(".js-wishlist");
wishlist.forEach(function (wishtoGet) {
  wishtoGet.addEventListener("click", function () {
    let addtowishlist = wishtoGet.dataset.addtowishlist;

    let sameProduct = 0;

    products.forEach((checkingSameProducts) => {
      if (addtowishlist === checkingSameProducts.addtowishlist) {
        sameProduct = checkingSameProducts;
      }
    });

    if (sameProduct) {
      sameProduct.quantity++;
    } else {
      products.push({
        addtowishlist,
        quantity: 1
      });
    }

    let navBarQuantity = 0;
    products.forEach((theNavQuantity) => {
      navBarQuantity += theNavQuantity.quantity;
    });

    let headerQuantity = document.querySelector(".js-nav-quantity");
    headerQuantity.innerHTML = `<a herf="#">Quantity (${navBarQuantity})</a>`;

    console.log(products);
  });
});

let sele = document.querySelectorAll('.js-quantity-selector');
sele.forEach(function(pages){
    pages.addEventListener('click', function(){
        console.log(pages.value);
    });
});