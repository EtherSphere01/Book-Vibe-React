const getStoredBook = (listName) => {
  const storedBook = localStorage.getItem(listName);

  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const addToDB = (id, listName) => {
  const storedBook = getStoredBook(listName);
  if (storedBook.includes(id)) {
    return false;
  } else {
    storedBook.push(id);
    localStorage.setItem(listName, JSON.stringify(storedBook));
    return true;
  }
};

const removeFromDB = (id) => {
  const storedBook = getStoredBook("wishList");
  const updatedBook = storedBook.filter((bookId) => bookId !== id);
  localStorage.setItem("wishList", JSON.stringify(updatedBook));
  const ans = addToDB(id, "readList");
  if (ans) {
    return true;
  }
  return false;
};

export { addToDB, removeFromDB, getStoredBook };
