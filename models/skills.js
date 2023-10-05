const skills = [
    {id: 123456, skill: 'Html5', done: true},
    {id: 789012, skill: 'CSS3', done: true},
    {id: 345678, skill: 'Javascript', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
	
  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill)
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
  }

  function create(skill) {
    skill.id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
  }
  
  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }