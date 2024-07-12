class Repository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async findAll(options = {}) {
    return await this.model.findAll(options);
  }

  async update(id, data) {
    return await this.model.update(data, { where: { id } });
  }

  async delete(id) {
    return await this.model.destroy({ where: { id } });
  }
}

module.exports = Repository;
