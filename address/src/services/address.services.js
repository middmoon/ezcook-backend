"use strict";

const model = require("../models");
const Repository = require("../models/repositories/repositories");

const AdministrativeRegionRepo = new Repository(model.AdministrativeRegion);
const AdministrativeUnitRepo = new Repository(model.AdministrativeUnit);
const DistrictRepo = new Repository(model.District);
const ProvinceRepo = new Repository(model.Province);
const WardRepo = new Repository(model.Ward);

class AddressServices {}
