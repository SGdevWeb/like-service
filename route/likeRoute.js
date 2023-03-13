const express = require('express');
const router = express.Router();
require('dotenv').config();
const controller = require('../controller/likeContoller');
const DTO = require('../dto/dtos');

router.post('/postlike', DTO.postLike, controller.postLikeController);

router.get('/projectlikes', DTO.getLikesProject, controller.getLikesByProjectController);

router.get('/projectliked', DTO.getIsliked, controller.getProjectLikeByUserController);

module.exports = router