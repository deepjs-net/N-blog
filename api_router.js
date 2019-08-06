
const express = require('express');

const test = require('./api/test');
const topic = require('./api/topic');
const user = require('./api/user');

const router = express.Router();

// TEST
router.post('/test/create', test.create)
router.post('/test/edit', test.update)
router.post('/test/delete', test.delete)
router.get('/test/list', test.findAll)
router.get('/test', test.findOne)

// 文章
router.get('/topics', topic.getAll)
router.post('/topic/create', topic.create)
router.post('/topic/:id/edit', topic.updateTopicById)
router.get('/topic/:id', topic.getTopicById)

// 用户
router.get('/useres', user.getAll)
router.post('/user/create', user.create)
router.post('/user/:id/edit', user.updateUserById)
router.get('/user/:id', user.getUserById)



module.exports = router;
