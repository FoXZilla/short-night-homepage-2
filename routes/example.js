const express = require('express');
const router = express.Router();
const example = require('../conf/example');

/* GET users listing. */
router.get('/:name?', function(req, res) {
  const name = req.params.name || 'index';

  if (name === 'index') {
    res.render('example-list', { example });
  } else {
    const targetExample = example.find(i => i.route === name);

    if (!targetExample) {
      res.render('error', { message: 'Not found the example of ' + name });
      return;
    }

    res.render('example-view', { example: targetExample });
  }
});

module.exports = router;
