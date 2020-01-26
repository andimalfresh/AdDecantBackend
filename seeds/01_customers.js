
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        // { 
        //   id: 1, 
        //   name:'andrew',
        //   email:'wandrewpedersen@gmail.com',
        //   phone:'9705319665'
        // },
        // { 
        //   id: 2, 
        //   name:'Kristi',
        //   email:'skibunny786@gmail.com',
        //   phone:'3037868055'
        // },
      ]);
    });
};
