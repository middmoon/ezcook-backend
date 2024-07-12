'use strict';

const model = require('../models');
const Repository = require('../models/repositories/repositories');
const { Op } = require('sequelize');

const AdministrativeRegionRepo = new Repository(model.AdministrativeRegion);
const AdministrativeUnitRepo = new Repository(model.AdministrativeUnit);
const ProvinceRepo = new Repository(model.Province);
const DistrictRepo = new Repository(model.District);
const WardRepo = new Repository(model.Ward);

class AddressService {
  static async getProvinces() {
    const province = await ProvinceRepo.findAll();
    if (!province) {
      throw new NotFoundError('Cannot get provinces');
    } else {
      return { province };
    }
  }

  static async getDistrictsByProvinceCode(province_code) {
    const district = await DistrictRepo.findAll({
      where: { province_code: province_code },
      raw: true,
    });
    if (!district) {
      throw new NotFoundError('Cannot get districts');
    } else {
      return { district };
    }
  }

  static async getWardsByDistrictCode(district_code) {
    const ward = await WardRepo.findAll({
      where: { district_code: district_code },
      raw: true,
    });
    if (!ward) {
      throw new NotFoundError('Cannot get wards');
    } else {
      return { ward };
    }
  }

  static async searchPlace(search) {
    const query = search.query;
    try {
      const provinces = await ProvinceRepo.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.like]: `%${query}%` } },
            { name_en: { [Op.like]: `%${query}%` } },
            { full_name: { [Op.like]: `%${query}%` } },
          ],
        },
        limit: 2,
      });

      const districts = await DistrictRepo.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.like]: `%${query}%` } },
            { name_en: { [Op.like]: `%${query}%` } },
            { full_name: { [Op.like]: `%${query}%` } },
          ],
        },
        limit: 7,
      });

      // const wards = await WardRepo.findAll({
      //   where: {
      //     [Op.or]: [
      //       { name: { [Op.like]: `%${query}%` } },
      //       { name_en: { [Op.like]: `%${query}%` } },
      //       { full_name: { [Op.like]: `%${query}%` } },
      //     ],
      //   },
      //   limit: 4,
      // });

      // const place = [...provinces, ...districts];
      return { provinces, districts };
    } catch (error) {
      console.error('Error while searching:', error);
      throw new Error('Internal server error');
    }
  }
}

module.exports = AddressService;
