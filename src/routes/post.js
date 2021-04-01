const Router = require("express").Router;
const postController = require("../controllers/postController");

let router = Router();

router.get("/", postController.getPosts);
router.post("/store", postController.storePost);

module.exports = router;
