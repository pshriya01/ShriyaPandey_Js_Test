const bookList = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.9,
      details: [
        { chapter: "Introduction", pages: 20 },
        { chapter: "Chapter 1", pages: 15 }
      ]
    },
    {
      title: "1984",
      author: "George Orwell",
      rating: 4.8,
      details: [
        { chapter: "Introduction", pages: 12 },
        { chapter: "Chapter 1", pages: 18 },
        { chapter: "Chapter 2", pages: 22 }
      ]
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 4.7,
      details: [
        { chapter: "Preface", pages: 10 },
        { chapter: "Chapter 1", pages: 14 },
        { chapter: "Chapter 2", pages: 16 }
      ]
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.6,
      details: [
        { chapter: "Introduction", pages: 8 },
        { chapter: "Chapter 1", pages: 20 },
        { chapter: "Chapter 2", pages: 18 }
      ]
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      rating: 4.5,
      details: [
        { chapter: "Preface", pages: 14 },
        { chapter: "Chapter 1", pages: 25 },
        { chapter: "Chapter 2", pages: 19 }
      ]
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 4.3,
      details: [
        { chapter: "Introduction", pages: 9 },
        { chapter: "Chapter 1", pages: 17 },
        { chapter: "Chapter 2", pages: 21 }
      ]
    }
  ]

  
//   Write a function to return the book title and the chapter with the maximum pages.

const booktitle = (list)=>{
     
    return bookList.map(book => {
        const maxChapter = book.details.reduce((max, cur) => {
          return cur.pages > max.pages ? cur : max;
        });
    
        return { title: book.title, chapter: maxChapter.chapter };
      });

}

const res = booktitle(bookList)
console.log(res)

// Return a list of unique authors.

const getUniqueAuthors = (bookList) => {
    const authors = bookList.map(book => book.author);
    return [...new Set(authors)];
  };
  
  const uniqueAuthors = getUniqueAuthors(bookList);
  console.log(uniqueAuthors);




//   Create a constructor function Person with a property name. Add a method greet to its prototype that prints "Hello, <name>". Test this with different instances.



function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`);
  };
  
  const person1 = new Person("Alice");
  const person2 = new Person("Bob");
  const person3 = new Person("Charlie");
  

  person1.greet(); 
  person2.greet(); 
  person3.greet(); 
  
  