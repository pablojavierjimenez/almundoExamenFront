/* GET api listing. */
const apiDefault = (req, res) => {
  res.send(`<h1 style="width:100%;text-align:center;
    font-size:10rem;background:hsl(218,100%,23%);
    height: 100%;display:flex;justify-content:center;
    align-items:center;color:#fff;">api works</h1>`);
};

const hotelController = require('../controllers/hotel.controller');


function apiRoutes (app) {
  /* GET api listing. */
  app.route('/api')
    .get(apiDefault);

  // hotelListController Routes
  app.route('/api/hotels')
    .get(hotelController.getHotelsList);

  // Single hotel Routes
  app.route('/api/hotels/:id')
    .get(hotelController.getHotelById);
};

module.exports = apiRoutes;
