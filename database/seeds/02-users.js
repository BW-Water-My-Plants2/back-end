exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("users")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("users").insert([
          {
            fullname: "Mark Smith",
            username: "MarkyMark",
            password: "abc123",
            phonenumber: "1234562311",
            email: "JoeMoe@email.com",
          },
          {
            fullname: "Jill Dean",
            username: "Jilly",
            password: "abc123",
            phonenumber: "1234562312",
            email: "JoeMoe@email.com",
            
          }
        ]);
      });
  };