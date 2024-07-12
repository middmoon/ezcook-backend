const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const AddressController = require('../../controllers/address.controller');

router
  .get('/search', asyncHandler(AddressController.searchPlace))
  .get('/province', asyncHandler(AddressController.getProvinces))
  .get(
    '/district/:province_code',
    asyncHandler(AddressController.getDistrictsByProvinceCode)
  )
  .get(
    '/ward/:district_code',
    asyncHandler(AddressController.getWardsByDistrictCode)
  )
  .get('/', (req, res) => {
    res.send('API V1 FOR ADDRESS');
  });

module.exports = router;
