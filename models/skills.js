const skills = [
    {id: 123456, skill: 'Html5', done: true},
    {id: 789012, skill: 'CSS3', done: true},
    {id: 345678, skill: 'Javascript', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    let skill = skills.find(skill => skill.id === id)
    return skill;
  }