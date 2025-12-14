
    
    MAX_BOOKS = 5
    borrowedBooks = the MAX_BOOKS
	count starts at 0 


    Begin borrowBook(book) Procedure 
		
        if count = MAX_BOOKS then
            return "Borrowing limit reached"
		end if	

        //storing book in borrowedBooks at position [count]
        borrowedBooks[count] <- book   
        count = count + 1
		
	End borrowBook(book) Procedure
	

    Begin returnBook(book) Procedure
	
        if borrowedBooks[count] = 0 then 
            return ("No books to return.");
        end if
      
        const index = this.borrowedBooks.indexOf(book);

        make indexflag = -1
		
		for i = 0 to count - 1 do
			if borrowedBooks[i] = book then
				index = i
			end if
		end for
    
		if index = -1 then
			return ("Book not found.")
		end if
		
		for i = index to count - 2 do
			borrowedBooks[i] = borrowedBooks[i+1] 
		end for
		
		count + count - 1
		
		print book + "returned successfully."
	End returnBook(book) Procedure



    Begin displayBorrowedBooks() Procedure
        if count = 0 then
            print "No books currently borrowed."
            return
		end if
        

        for i = 0 to count - 1 do
			print borrowedBooks[i]
		end for
	End displayBorrowedBooks() Procedure
	
	
	
	
