const Noti = require("../model/notification_model");

const getNotification = async (req, res) => {
  const userId = req.decoded.payload.id;
  // console.log(userId);
  const notificationData = await Noti.getNotification(userId);
  res.json(notificationData);
};

module.exports = {
  getNotification,
};
