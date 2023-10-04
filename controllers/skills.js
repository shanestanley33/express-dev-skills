const Skills = require('../models/skills')


module.exports = { index, show }

function index(req, res) {
    let skills = Skill.getAll();
    res.render('skills/index', {
      skills: skills
    });
  }

  function show(req, res) {
    let skill = Skill.getOne(req.params.id)
res.render('skills/show', { skill })
  }