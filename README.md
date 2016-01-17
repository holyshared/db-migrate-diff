db-migrate-diff
======================================

Migration difference detection module for db-migrate.

[![npm version](https://badge.fury.io/js/db-migrate-diff.svg)](http://badge.fury.io/js/db-migrate-diff)
[![Build Status](https://travis-ci.org/holyshared/db-migrate-diff.svg?branch=master)](https://travis-ci.org/holyshared/db-migrate-diff)
[![codecov.io](http://codecov.io/github/holyshared/db-migrate-diff/coverage.svg?branch=master)](http://codecov.io/github/holyshared/db-migrate-diff?branch=master)
[![Dependency Status](https://david-dm.org/holyshared/db-migrate-diff.svg)](https://david-dm.org/holyshared/db-migrate-diff)

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
* **--env, -e** The environment to run the migrations under. [default: "dev"]
* **--migrations-dir, -m** The directory containing your migration files.  [default: "./migrations"]
* **--config** Location of the database.json file.             [default: "./database.json"]
* **--migration-table** Set the name of the migration table.
* **--reporter, -r** Reporter of the difference
	* default - Display the differences of migration.
	* ghost - Display the migration that does not exist.


Tests
--------------------------------------

Create a database for unit test.

	CREATE DATABASE dbmigrate CHARACTER SET = utf8;

Run the test.

	npm install
	npm test
