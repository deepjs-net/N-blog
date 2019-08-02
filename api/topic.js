const model = require('../model').Topic;

module.exports = {
  create: info => {
    return model.create(info).exec();
  },
  getTopicByTitle: title => {
    return model
      .findOne({ title })
      .addCreateAt()
      .exec()
  },
}