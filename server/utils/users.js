[
  {
    id: "dsfhsdhfdfhhgr",
    name: "Ray",
    room: "The Office fans"
  }
];

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    let user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    // return user that was removed
    let removedUser = this.getUser(id);

    if (removedUser) {
      this.users = this.users.filter(user => user.id !== id);
    }
    return removedUser;
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserList(room) {
    let users = this.users.filter(user => user.room === room);
    let namesArray = users.map(user => user.name);

    return namesArray;
  }
}

module.exports = { Users };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old`;
//   }
// }

// let me = new Person("Ray", 34);
// let description = me.getUserDescription();
// console.log(description);
