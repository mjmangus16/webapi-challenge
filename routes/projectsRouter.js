const express = require("express");

const router = express.Router();

const Projects = require("../data/helpers/projectModel");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.get(id)
    .then(project => {
      if (!project) {
        res.status(400).json({ message: "That Project doesn't exist!" });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      res.status(400).json({ message: "Something went wrong!" });
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  Projects.insert(data)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({ message: "Something went wrong!" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  Projects.update(id, data)
    .then(data => {
      if (!data) {
        res.status(400).json({ message: "That id does not exist!" });
      } else {
        res.status(200).json(data);
      }
    })
    .catch(err => {
      res.status(400).json({ message: "Something went wrong!" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
    .then(id => {
      if (!id) {
        res.status(400).json({ message: "That id does not exist!" });
      } else {
        res.status(200).json(id);
      }
    })
    .catch(err => {
      res.status(400).json({ message: "Something went wrong!" });
    });
});

router.get("/actions/:id", (req, res) => {
  const { id } = req.params;

  Projects.get(id)
    .then(project => {
      if (!project) {
        res.status(400).json({ message: "That Project doesn't exist!" });
      } else {
        Projects.getProjectActions(id)
          .then(actions => {
            if (actions.length < 1) {
              res
                .status(400)
                .json({ message: "There are no actions for that project" });
            } else {
              res.status(200).json(actions);
            }
          })
          .catch(err => {
            res.status(400).json({ message: "Something went wrong!" });
          });
      }
    })
    .catch(err => {
      res.status(400).json({ message: "Something went wrong!" });
    });
});

module.exports = router;
