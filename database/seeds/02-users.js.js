exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("users")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("users").insert([
          {
            fullname: "Susan Bailey",
            username: "SBailey",
            password: "password1",
            email: "sbailey@email.com"
          },
          {
            fullname: "Billy Jean",
            username: "Beany",
            password: "password2",
            email: "beany@emaily.com"
          }
        ]);
      });
  };