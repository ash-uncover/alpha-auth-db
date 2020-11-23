# alpha-auth-db

see https://github.com/ash-uncover/alpha-auth

see https://github.com/ash-uncover/alpha-auth-api

## Prerequisite

We use Mongo DB as our core database system.

Our production and test systems are using Mongo Atlas instances but one can install a local

## Scripts

We provide scripts to reset the database and fill it with some test data

To drop all the collection and rebuild their indexes:

```
db-init.js
```

To insert some data into the collection

```
db-testdata.js
```
