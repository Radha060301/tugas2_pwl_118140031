var express = require('express');
var router = express.Router();

var data = [{
  nama: "Agus", umur: "28"
}];

router.get('/', function(req, res, next) {
  res.json({msg: "Berhasil"});
});

router.get('/data', function(req, res, next) {
  res.json({identitas: data});
});

router.post('/data', function(req, res, next) {
  const { nama, umur } = req.body;

  if (String(nama) && String(umur)) {
    try {
      data.push({nama: String(nama), umur: String(umur)});
      res.json({msg: "Berhasil"});
    } catch (error) {
      res.json({msg: "Gagal"});
    }
  } else {
    res.json({msg: "Gagal"});
  }
});

router.put('/data', function(req, res, next) {
  const { id, nama, umur } = req.body;

  if (String(id) && String(nama) && String(umur)) {
    if (id >= 0 && id < data.length) {
      data[id] = {nama: String(nama), umur: String(umur)};
      res.json({msg: "Berhasil"});
    } else {
      res.json({msg: "Gagal"});
    }
  } else {
    res.json({msg: "Gagal"});
  }
});

router.delete('/data', function(req, res, next) {
  const { id } = req.body;

  if (String(id)) {
    if (id >= 0 && id < data.length) {
      for (const key in data[id]) {
        delete data[id][key];
      }
      delete data[id];
      res.json({msg: "Berhasil"});
    } else {
      res.json({msg: "Gagal"});
    }
  } else {
    res.json({msg: "Gagal"});
  }
})

module.exports = router;
