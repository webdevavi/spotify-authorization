const router = require('express').Router()
const axios = require('axios')
const qs = require('qs')

module.exports = router.post('/token', async (req, res) => {
    const base64Token = req.headers.authorization.split(' ')[1]
    const data = qs.stringify({
        'grant_type': 'client_credentials'
    });
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${base64Token}`,
    }
    const config = {
        method: 'POST',
        url: process.env.SPOTIFY_TOKEN_API_URL,
        headers, data
    }
    return await axios(config)
        .then(response => res.status(200).json(response.data))
        .catch(error => res.status(400).json({ 'message': error.message }));
})
