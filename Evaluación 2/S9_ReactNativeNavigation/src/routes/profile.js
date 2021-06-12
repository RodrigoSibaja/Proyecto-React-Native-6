const express = require("express");
const { exp } = require("react-native-reanimated");
const router = express.Router();
const fetch = require("node-fetch");

router.get('/', async(req, res) =>{

    const {gamertag, platform} = req.query;

    try {
        const headers = {
            "TRN-Api-Key": process.env.TRACKER_API_KEY
        }

        const response = await fetch(`${process.env.TRACKER_API_URL}
        /profile/${platform}/${gamertag}
        `,
         headers
        );

        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            data.status = false;
            return res.status(404).json({
                msg: `${gamertag} profile not found`,
            });
        }
        data.status = true;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            msg: 'Server Error',
        })
    }
})