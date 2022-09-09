const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth')
const postController = require('../app/controllers/PostController')

router.post('/create',verifyToken, postController.create)
router.delete('/:id',verifyToken, postController.delete)
router.put('/:id',verifyToken, postController.update)
router.get('/', postController.index)

module.exports = router