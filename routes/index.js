import express from 'express';

const router = express.Router();

const contentCtrl = require('../controllers/content');
api.get('/content/:code', contentCtrl.getContent);

module.exports = api;