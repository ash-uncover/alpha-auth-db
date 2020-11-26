// ACCOUNTS //

db.accounts.insert({
  id: "account1",
  username: "a",
  password: "a",
  type: "AP",
  userId: "user1",
  status: "ACTIVE",
})
db.accounts.insert({
  id: "account2",
  username: "b",
  password: "b",
  userId: "user2",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insert({
  id: "account3",
  username: "c",
  password: "c",
  userId: "user3",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insert({
  id: "account4",
  username: "d",
  password: "d",
  userId: "user4",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insert({
  id: "account5",
  username: "e",
  password: "e",
  userId: "user5",
  type: "AP",
  status: "ACTIVE",
})

// USERS //

db.users.insert({
  id: "user1",
  name: "User A",
  description: "Bonjour je suis le user A",
  relations: [
    {
      userId: "user2",
      status: "ACTIVE",
    },
    {
      userId: "user3",
      status: "ACTIVE",
    },
  ],
})
db.users.insert({
  id: "user2",
  name: "User B",
  description: "Bonjour je suis le user B",
  relations: [
    {
      userId: "user1",
      status: "ACTIVE",
    },
  ],
})
db.users.insert({
  id: "user3",
  name: "User C",
  description: "Bonjour je suis le user C",
  relations: [
    {
      userId: "user1",
      status: "ACTIVE",
    },
  ],
})
db.users.insert({
  id: "user4",
  name: "User D",
  description: "Bonjour je suis le user D",
})
db.users.insert({
  id: "user5",
  name: "User E",
  description: "Bonjour je suis le user E",
})
