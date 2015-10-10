db-migrate-diff
======================================

Migration difference detection module for db-migrate.

[![Build Status](https://travis-ci.org/holyshared/db-migrate-diff.svg?branch=master)](https://travis-ci.org/holyshared/db-migrate-diff)
[![Dependency Status](https://www.versioneye.com/user/projects/5618dbc2a193340f280002c0/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5618dbc2a193340f280002c0)

![https://raw.githubusercontent.com/holyshared/db-migrate-diff/master/screen-shot.png](https://raw.githubusercontent.com/holyshared/db-migrate-diff/master/screen-shot.png)


Installation
--------------------------------------

	npm install db-migrate-diff --save-dev

Basic usage
--------------------------------------

You just run the following command.

	db-migrate-diff [options]

If you want to check the difference between the production environment, it will command such as the following.

	db-migrate-diff -e production -m ./migrations --config ./database.json

### Command line options
* --env, -e  The environment to run the migrations under. [default: "dev"]
* --migrations-dir, -m        The directory containing your migration files.  [default: "./migrations"]
* --config                    Location of the database.json file.             [default: "./database.json"]
* --migration-table           Set the name of the migration table.
