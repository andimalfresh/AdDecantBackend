const db = require("./database-connection")

module.exports = {
    listAll() {
        return db("customers")
    },
    createCUSTOMER(createCustomer) {
        return db("customers")
        .insert(createCustomer)
        .returning("*")
    },
    deleteCUSTOMER(id) {
        return db("customers")
        .where("id",id)
        .delete()
    },
    getById(id) {
        return db("customers").where("id", id)
    },
    updateCUSTOMER(id, updateCustomer) {
        return db("customers")
          .where('id', id)
          .update(updateCustomer)
          .returning('*')
      }
}