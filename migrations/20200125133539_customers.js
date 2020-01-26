exports.up = function(knex, Promise) {
    return knex.schema.createTable("customers", (customers) => {
      customers.increments("id")
      customers.string("name")
      customers.string("email")
      customers.string("phone")
    }) 
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("customers")
  }