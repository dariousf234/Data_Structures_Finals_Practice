
    //Set max # of books to 5; start with 0 books borrowed.
    MAX_BOOKS = 5
    borrowedBooks = the MAX_BOOKS
	count starts at 0 


    Begin borrowBook(book) Procedure 
		//if 5 books are already borrowed, display a limit message.
        if count = MAX_BOOKS then
            return "Borrowing limit reached"
		end if	

        //If not, add book to list and increase count
        borrowedBooks[count] <- book   
        count = count + 1
		
	End borrowBook(book) Procedure
	

    Begin returnBook(book) Procedure
		//If no books are borrowed, display message
        if borrowedBooks[count] = 0 then 
            return ("No books to return.");
        end if
      
        const index = this.borrowedBooks.indexOf(book);

        make indexflag = -1
		//Search list for book
		for i = 0 to count - 1 do
			if borrowedBooks[i] = book then
				index = i
			end if
		end for
    	//If not found, display message
		if index = -1 then
			return ("Book not found.")
		end if
		//Remove book, move books forward and decrease count
		for i = index to count - 2 do
			borrowedBooks[i] = borrowedBooks[i+1] 
		end for
		
		count + count - 1
		
		print book + "returned successfully."
	End returnBook(book) Procedure



    Begin displayBorrowedBooks() Procedure
		//If no books are borrowed, display message 
        if count = 0 then
            print "No books currently borrowed."
            return
		end if

		//Show borrowed books in order taken out
        for i = 0 to count - 1 do
			print borrowedBooks[i]
		end for
	End displayBorrowedBooks() Procedure
	
	
	
	
