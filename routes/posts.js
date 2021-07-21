const express = require('express');
const Post = require('../models/post');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('We are on post page...');
});

router.post('/', async (req,res)=>{
    const post = new Post({
        accelarometerX : req.body.accelarometerX,
        accelarometerY : req.body.accelarometerY,
        accelarometerZ : req.body.accelarometerZ,
        proximity : req.body.proximity,
        gyroX : req.body.gyroX,
        gyroY : req.body.gyroY,
        gyroZ : req.body.gyroZ,
        magnetometerX : req.body.magnetometerX,
        magnetometerY : req.body.magnetometerY,
        magnetometerZ : req.body.magnetometerZ,
        pressure : req.body.pressure,
        light : req.body.light,
        temperature : req.body.temperature,
        humidity : req.body.humidity,
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({massage:error});
    }

});

module.exports = router;