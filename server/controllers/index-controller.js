exports.home = (req, res) => {
  res.render('index');
};

exports.api = (req, res) => {
  res.json({
    ok: true,
    message: 'API works'
  });
};
