db.dropDatabase()

db.accounts.drop()
db.accounts.createIndex({"id": 1}, {"unique": true})

db.users.drop()
db.users.createIndex({"id": 1}, {"unique": true})

db.relations.drop()
db.relations.createIndex({"id": 1}, {"unique": true})

db.threads.drop()
db.threads.createIndex({"id": 1}, {"unique": true})

db.messages.drop()
db.messages.createIndex({"id": 1}, {"unique": true})

