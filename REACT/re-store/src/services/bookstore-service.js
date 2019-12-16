export default class BookStoreService {
 data = [
  {
    id: 1,
    title: "Production-Ready Microservices",
    author: "Susan J. Fowler",
    price: 33,
    coverImage: "https://cv02.twirpx.net/2111/2111167.jpg?t=20161219031735"
  },
  {
    id: 2,
    title: "Release It!",
    author: "Michael T. Nygard",
    price: 22,
    coverImage: "https://cdn1.ozone.ru/multimedia/1018888532.jpg"
  }
];
  getBook() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 600);
    });
  }
}
