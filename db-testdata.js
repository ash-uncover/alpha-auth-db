// ACCOUNTS //
db.disableFreeMonitoring()
db.accounts.insertOne({
  id: "account1",
  username: "a",
  password: "a",
  userId: "user1",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account2",
  username: "b",
  password: "b",
  userId: "user2",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account3",
  username: "c",
  password: "c",
  userId: "user3",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account4",
  username: "d",
  password: "d",
  userId: "user4",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account5",
  username: "e",
  password: "e",
  userId: "user5",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account6",
  username: "f",
  password: "f",
  userId: "user6",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account7",
  username: "g",
  password: "g",
  userId: "user7",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account8",
  username: "h",
  password: "h",
  userId: "user8",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account9",
  username: "i",
  password: "i",
  userId: "user9",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account10",
  username: "j",
  password: "j",
  userId: "user10",
  type: "AP",
  status: "ACTIVE",
})

// USERS //

db.users.insertOne({
  id: "user1",
  name: "User A",
  avatar: "images/userA.jpg",
  description: "Bonjour je suis le user A",
})
db.users.insertOne({
  id: "user2",
  name: "User B",
  avatar: "images/userB.jpg",
  description: "Bonjour je suis le user B",
})
db.users.insertOne({
  id: "user3",
  name: "User C",
  avatar: "images/userC.jpg",
  description: "Bonjour je suis le user C",
})
db.users.insertOne({
  id: "user4",
  name: "User D",
  avatar: "images/userD.jpg",
  description: "Bonjour je suis le user D",
})
db.users.insertOne({
  id: "user5",
  name: "User E",
  avatar: "images/userE.jpg",
  description: "Bonjour je suis le user E",
})
db.users.insertOne({
  id: "user6",
  name: "User F",
  avatar: "images/userF.jpg",
  description: "Bonjour je suis le user F",
})
db.users.insertOne({
  id: "user7",
  name: "User G",
  avatar: "images/userG.jpg",
  description: "Bonjour je suis le user G",
})
db.users.insertOne({
  id: "user8",
  name: "User H",
  avatar: "images/userH.jpg",
  description: "Bonjour je suis le user H",
})
db.users.insertOne({
  id: "user9",
  name: "User I",
  avatar: "images/userI.jpg",
  description: "Bonjour je suis le user I",
})
db.users.insertOne({
  id: "user10",
  name: "User J",
  avatar: "images/userJ.jpg",
  description: "Bonjour je suis le user J",
})

// RELATIONS //

/*
db.relations.insertOne({
  id: "relationship1-2",
  userId: "user1",
  relationId: "user2",
  status: "ACTIVE",
})
db.relations.insertOne({
  id: "relationship2-1",
  userId: "user2",
  relationId: "user1",
  status: "ACTIVE",
})
db.relations.insertOne({
  id: "relationship1-3",
  userId: "user1",
  relationId: "user3",
  status: "ACTIVE",
})
db.relations.insertOne({
  id: "relationship3-1",
  userId: "user3",
  relationId: "user1",
  status: "ACTIVE",
})
db.relations.insertOne({
  id: "relationship1-4",
  userId: "user1",
  relationId: "user4",
  status: "PENDING",
})
db.relations.insertOne({
  id: "relationship4-1",
  userId: "user4",
  relationId: "user1",
  status: "WAITING",
})
db.relations.insertOne({
  id: "relationship1-5",
  userId: "user1",
  relationId: "user5",
  status: "WAITING",
})
db.relations.insertOne({
  id: "relationship5-1",
  userId: "user5",
  relationId: "user1",
  status: "PENDING",
})
db.relations.insertOne({
  id: "relationship1-6",
  userId: "user1",
  relationId: "user6",
  status: "BLOCKED",
})
db.relations.insertOne({
  id: "relationship6-1",
  userId: "user6",
  relationId: "user1",
  status: "ACTIVE",
})

// THREADS //

db.threads.insertOne({
  "id":"thread12",
  "name":"",
  "type":"DIRECT",
  "userId":["user1","user2"]
})
db.threads.insertOne({
  "id":"thread13",
  "name":"",
  "type":"DIRECT",
  "userId":["user1","user2"]
})
db.threads.insertOne({
  "id":"thread15",
  "name":"",
  "type":"DIRECT",
  "userId":["user1","user5"]
})
*/