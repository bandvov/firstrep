let data = [
  {
    id: 1,
    idx: 10001,
    title: "Modern Front-End Development for Rails",
    author: "Noel Rappin",
    year: 2019,
    pages: 250,
    count: 1,
    total: 0,
    price: 24,
    isbn: "978-1-68050-721-8",
    imageUrl:
      "https://imagery.pragprog.com/products/587/nrclient.jpg?1571760174"
  },
  {
    id: 2,
    idx: 10002,
    title: "Quantum Computing",
    author: "Nihal Mehta, Ph.D.",
    year: 2019,
    pages: 200,
    count: 1,
    total: 0,
    price: 40,
    isbn: "978-1-68050-720-1",
    imageUrl:
      "https://imagery.pragprog.com/products/569/nmquantum.jpg?1571267517"
  },
  {
    id: 3,
    idx: 10003,
    title: "Node.js 8 the Right Way",
    author: "Jim R. Wilson",
    year: 2019,
    pages: 334,
    count: 1,
    total: 0,
    price: 10,
    isbn: "978-1-68050-195-7",
    imageUrl: "https://imagery.pragprog.com/products/480/jwnode2.jpg?1489077921"
  },
  {
    id: 4,
    idx: 10004,
    title: "Secure Your Node.js Web Application",
    author: "Karl Düüna",
    year: 2019,
    pages: 230,
    count: 1,
    total: 0,
    price: 40,
    isbn: "978-1-68050-085-1",
    imageUrl:
      "https://imagery.pragprog.com/products/443/kdnodesec.jpg?1433877235"
  }
];

export default class BookStoreService {
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
}
