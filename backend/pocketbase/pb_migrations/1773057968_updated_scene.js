/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_223627941",
    "hidden": false,
    "id": "relation4260467775",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "artistes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306139441")

  // remove field
  collection.fields.removeById("relation4260467775")

  return app.save(collection)
})
