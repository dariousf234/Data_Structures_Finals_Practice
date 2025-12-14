class LibraryAccount {
    constructor() {
        this.MAX_BOOKS = 5;
        this.borrowedBooks = [];
    }

    // Borrow a book
    borrowBook(book) {
        if (this.borrowedBooks.length === this.MAX_BOOKS) {
            console.log("Borrowing limit reached. Return a book first.");
            return;
        }

        this.borrowedBooks.push(book);
        console.log(book + " borrowed successfully.");
    }

    // Return a book
    returnBook(book) {
        if (this.borrowedBooks.length === 0) {
            console.log("No books to return.");
            return;
        }

        const index = this.borrowedBooks.indexOf(book);

        if (index === -1) {
            console.log("Book not found.");
            return;
        }

        this.borrowedBooks.splice(index, 1);
        console.log(book + " returned successfully.");
    }

    // Display borrowed books in order borrowed
    displayBorrowedBooks() {
        if (this.borrowedBooks.length === 0) {
            console.log("No books currently borrowed.");
            return;
        }

        console.log("Borrowed books:");
        for (let i = 0; i < this.borrowedBooks.length; i++) {
            console.log(this.borrowedBooks[i]);
        }
    }
}

// Example usage
const student = new LibraryAccount();

student.borrowBook("Discrete Structures");
student.borrowBook("Data Structures");
student.borrowBook("Operating Systems");

student.displayBorrowedBooks();

student.returnBook("Data Structures");

student.displayBorrowedBooks();
