const Project = require('../models').Project;

module.exports = {
  index(req, res) {
    return Project
    .findAll()
    .then(projects => res.status(200).send(projects));
  },
  create(req, res) {
    return Project
      .create({
        name: req.body.name
      })
      .then(project => res.status(201).send(project));
  },
  show(req, res) {
    Project
    .findById(req.params.id)
    .then(project => res.status(200).send(project));
  },
  update(req, res) {
    Project
    .findById(req.params.id)
    .then(project => {
      if (project) {
        project.update(req.body).then(project => {
          return res.status(200).send(project)
        })
      }
    })
  },
  delete(req, res) {
    return Project
      .findById(req.params.id)
      .then(project => {
          if (project) {
            project.destroy().then(() => {
              return res.status(204).send();
            });
          }
        }
      );
  }
};