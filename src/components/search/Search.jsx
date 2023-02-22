import React, {useState} from 'react'

const search = () => {

    const [searchInput, setSearchInput] = useState("");

    const books = [
   
     { title: "book1", author: "author1" },
     { title: "book2", author: "author2" },
     { title: "book3", author: "author3" },
   
   ];
   
   const handleChange = (e) => {
     e.preventDefault();
     setSearchInput(e.target.value);
   };
   
   if (searchInput.length > 0) {
       countries.filter((book) => {
       return book.title.match(searchInput);
   });
   }
   
   return <div>
    
        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />

        <ul>
            {
                books.map((book,index) => (
                <li key={index}>{book.title} by {book.author}
                </li>  
                )
            )}
        </ul>
   
    </div>
  
}

export default search