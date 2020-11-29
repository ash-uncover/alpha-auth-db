// ACCOUNTS //

db.accounts.insert({
  id: "account1",
  username: "a",
  password: "a",
  userId: "user1",
  type: "AP",
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
db.accounts.insert({
  id: "account6",
  username: "f",
  password: "f",
  userId: "user6",
  type: "AP",
  status: "ACTIVE",
})

// USERS //

db.users.insert({
  id: "user1",
  name: "User A",
  description: "Bonjour je suis le user A",
})
db.users.insert({
  id: "user2",
  name: "User B",
  description: "Bonjour je suis le user B",
})
db.users.insert({
  id: "user3",
  name: "User C",
  description: "Bonjour je suis le user C",
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
db.users.insert({
  id: "user6",
  name: "User F",
  description: "Bonjour je suis le user F",
})

// RELATIONS //

db.relations.insert({
  id: "relationship1-2",
  userId: "user1",
  relationId: "user2",
  status: "ACTIVE",
})
db.relations.insert({
  id: "relationship2-1",
  userId: "user2",
  relationId: "user1",
  status: "ACTIVE",
})
db.relations.insert({
  id: "relationship1-3",
  userId: "user1",
  relationId: "user3",
  status: "ACTIVE",
})
db.relations.insert({
  id: "relationship3-1",
  userId: "user3",
  relationId: "user1",
  status: "ACTIVE",
})
db.relations.insert({
  id: "relationship1-4",
  userId: "user1",
  relationId: "user4",
  status: "PENDING",
})
db.relations.insert({
  id: "relationship4-1",
  userId: "user4",
  relationId: "user1",
  status: "WAITING",
})
db.relations.insert({
  id: "relationship1-5",
  userId: "user1",
  relationId: "user5",
  status: "WAITING",
})
db.relations.insert({
  id: "relationship5-1",
  userId: "user5",
  relationId: "user1",
  status: "PENDING",
})
db.relations.insert({
  id: "relationship1-6",
  userId: "user1",
  relationId: "user6",
  status: "BLOCKED",
})
db.relations.insert({
  id: "relationship6-1",
  userId: "user6",
  relationId: "user1",
  status: "ACTIVE",
})