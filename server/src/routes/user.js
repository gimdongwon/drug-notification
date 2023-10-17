const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

router.get("/findAll", async (req, res) => {
  //   User.findAll()
  //     .then((users) => console.log(users))
  //     .catch((e) => console.error(e));
  //   User.find((err, users) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       users.forEach(function (element) {
  //         console.log(element.name);
  //       });
  //     }
  //   });
  User.find().then((users) => {
    return res.status(200).json({
      success: true,
      users,
    });
  });
});

// router.post("/join", (req, res) => {
//   const { name, age, gender, _id } = req;
//   const obj = {
//     name,
//     age,
//     gender,
//     _id,
//   };
//   User.create(obj)
//     .then((users) => console.log(users))
//     .catch((e) => console.error(e));
// });

module.exports = router;
