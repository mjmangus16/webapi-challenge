const express = require("express");

const router = express.Router();

const Actions = require("../data/helpers/actionModel");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Actions.get(id)
    .then(action => {
      if (!action) {
        res.status(400).json({ message: "Something went wrong!" });
      } else {
        res.status(200).json(action);
      }
    })
    .catch(err => {
      res.status(400).json({ message: "Something went wrong!" });
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  Actions.insert(data)
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

  Actions.update(id, data)
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

  Actions.remove(id)
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

module.exports = router;
