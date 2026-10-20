// object-oriented
// ini adalah class
class Book {
  // ini adalah attributes / properties
  title: string;
  authors: string[];
  pages: number;
  paperSize: string;
  font: string;
  genre: string;

  constructor(
    title: string,
    authors: string[],
    pages: number,
    paperSize: string,
    font: string,
    genre: string,
  ) {
    this.title = title;
    this.authors = authors;
    this.pages = pages;
    this.paperSize = paperSize;
    this.font = font;
    this.genre = genre;
  }
}

// new Book adalah object dari class Book
const novelBook = new Book(
  "Laskar Pelangi",
  ["Andrea Hirata", "John Doe", "Jane Smith"],
  350,
  "A4",
  "Times New Roman",
  "Fiction",
);

console.log(novelBook);
