const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.allUsers);
// router.post("/newUser", userController.newUser);
// router.get("/oneUser", userController.oneUser);
// router.put("/updateUsers", userController.updateUsers);
// router.delete("/deleteUsers", userController.deleteUsers);


module.exports = router;
