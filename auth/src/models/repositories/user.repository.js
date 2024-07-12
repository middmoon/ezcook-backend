const Repository = require('./repositories');
const model = require('../index');

class UserRepository extends Repository {
  constructor() {
    super(model.User);
  }

  async create() {}
}
