export const products = [];

export function pushingToProducts(selectedBookName, pages, bookQuantity){
     let alreadyChosen = products.find(books=> selectedBookName === books.selectedBookName);

    if (alreadyChosen) {
      alreadyChosen.timesWishListed++;
      alreadyChosen.bookQuantity += bookQuantity;
      alreadyChosen.pages = pages;
    } else {
      products.push({
        selectedBookName,
        individualWishListedItems: 1,
        pages,
        bookQuantity,
        timesWishListed:1
      });
    }
}