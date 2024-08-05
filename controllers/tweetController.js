const Tweet = require('../models/Tweet');

exports.postTweet = async (req, res) => {
  const { text } = req.body;
  try {
    const tweet = new Tweet({ userId: req.user.userId, text });
    await tweet.save();
    res.status(201).json({ message: 'Tweet posted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTimeline = async (req, res) => {
  try {
    const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 }).exec();
    res.json(tweets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
