# alpha-auth-db

Available on [Mongo Atlas](https://cloud.mongodb.com/v2/5e3a754af2a30b7edd24a0f3#/clusters/detail/ap-auth)

## Content

This project contains helper to setup a local mongo database usable for the alpha-auth project.

## Ecosystem

| Repository   | Description |
| ----------   | ----------- |
| [alpha-auth](https://github.com/ash-uncover/alpha-auth) | React frontend. |
| [alpha-auth-api](https://github.com/ash-uncover/alpha-auth-api) | Express web service providing REST API. |
| [alpha-auth-common](https://github.com/ash-uncover/alpha-auth-common) | Typescript models and service definition (consumed in frontend and API). |
| **[alpha-auth-db](https://github.com/ash-uncover/alpha-auth-db)** | **Convenient projet for starting local database.** |

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
