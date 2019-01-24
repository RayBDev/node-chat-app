const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Mike",
        room: "Node App"
      },
      {
        id: "2",
        name: "Jen",
        room: "React App"
      },
      {
        id: "3",
        name: "Joe",
        room: "Node App"
      }
    ];
  });

  it("should add new user", () => {
    let users = new Users();
    let user = {
      id: "123",
      name: "Ray",
      room: "The Office Fans"
    };
    users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should remove a user", () => {
    let user = users.removeUser("1");

    expect(user.id).toBe("1");
    expect(users.users.length).toBe(2);
  });

  it("should not remove user", () => {
    let user = users.removeUser("50");

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it("should find user", () => {
    let user = users.getUser("1");

    expect(user).toEqual(users.users[0]);
  });

  it("should not find user", () => {
    let user = users.getUser("50");

    expect(user).not.toEqual(users.users[0]);
  });

  it("should return names for Node App", () => {
    let userList = users.getUserList("Node App");

    expect(userList).toEqual(["Mike", "Joe"]);
  });

  it("should return names for React App", () => {
    let userList = users.getUserList("React App");

    expect(userList).toEqual(["Jen"]);
  });
});
