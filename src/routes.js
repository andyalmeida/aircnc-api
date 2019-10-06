const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);
// req.query = Acessar query params
// req.params = Acessar route params
// req.body = Acessar corpo da requisição

//repository patern
//services paterns



routes.post('/sessions', SessionController.store);

routes.get('/dashboard', DashboardController.show);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);


module.exports = routes;
