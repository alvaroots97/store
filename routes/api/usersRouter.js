const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const persons = [];
  const { size } = req.query;
  const limit = size || 20;
  for(let index = 0; index < limit; index++) {
    persons.push({
      name: faker.person.fullName(),
      gender: faker.person.gender()
    });
  }
  res.json(persons);
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Elsa Besar",
    gender: "Female"
  });
});

module.exports = router;
