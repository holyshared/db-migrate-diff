db-migrate-diff
======================================

Migration difference detection module for db-migrate.

[![Build Status](https://travis-ci.org/holyshared/db-migrate-diff.svg?branch=master)](https://travis-ci.org/holyshared/db-migrate-diff)

![https://raw.githubusercontent.com/holyshared/db-migrate-diff/master/screen-shot.png](https://raw.githubusercontent.com/holyshared/db-migrate-diff/master/screen-shot.png)


Installation
--------------------------------------

	npm install db-migrate-diff --save-dev

Basic usage
--------------------------------------

You just run the following command.

	db-migrate-diff [options]

For example, if you want to detect the production environment and the difference is, you are in command of the street below.

	db-migrate-diff -e production -m ./migrations --config ./database.json

### Command line options
* --env, -e  The environment to run the migrations under. [default: "dev"]
* --migrations-dir, -m        The directory containing your migration files.  [default: "./migrations"]
* --config                    Location of the database.json file.             [default: "./database.json"]
* --migration-table           Set the name of the migration table.
