exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("plants").insert([
        {
          plant_name: "Abutilon",
          plant_species: "Flowering Maple",
          water_schedule: "Water in 1 day"
        },
        {
          plant_name: "Elderberry",
          plant_species: "Sambucus",
          water_schedule: "Water in 2 day"
        },
        {
          plant_name: "Baby Rose",
          plant_species: "Rosa Multiflora",
          water_schedule: "Water in 3 day"
        },
        {
          plant_name: "Barberton Daisy",
          plant_species: "Gebera Jamesonii",
          water_schedule: "Water in 4 day"
        },
        {
          plant_name: "Tulip",
          plant_species: "Tulipa",
          water_schedule: "Water in 5 day"
        },
        {
          plant_name: "Busy Lizzie",
          plant_species: "Impatiens Walleriana",
          water_schedule: "Water in 6 day"
        },
        {
          plant_name: "Zedoary",
          plant_species: "Curcuma Zedoaria",
          water_schedule: "Water in 7 day"
        },
        {
          plant_name: "Umbrella Papyrus",
          plant_species: "Cyperus Alternifolius",
          water_schedule: "Water in 8 day"
        },
        {
          plant_name: "Lollipop",
          plant_species: "Pachystachys Lutea",
          water_schedule: "Water in 9 day"
        }
      ]);
    });
};