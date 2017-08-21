const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
router.get('/hotelList', (req, res) => {
  res.send('api/hotelList works');
});
module.exports = router;
