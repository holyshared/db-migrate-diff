dbm = global.dbm or require 'db-migrate'
type = dbm.dataType

exports.up = (db, callback) ->
  db.createTable 'groups',
    id:
      type: 'int'
      primaryKey: true
    name: 'string'
  , callback

exports.down = (db, callback) ->
  db.dropTable 'groups', callback
