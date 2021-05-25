const fs = require("fs");
const formidable = require("formidable");
const CSV = require("../model/csv");

//PARAMS
exports.getFileName = (req, res, next, id) => {
  CSV.findById(id).exec((err, file) => {
    if (err) {
      return res.status(400).json({ error: "invalid name of file" });
    }
    req.file = file;
    next();
  });
};

//READ
exports.getFile = (req, res) => {
  return res.json(req.file);
};
//UPLOAD/CREATE
exports.write = (req, res) => {
  let form = new formidable.IncomingForm();
  form.KeepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      res.status(400).json({
        error: "file no found",
      });
    }
    console.log("write working", JSON.parse(JSON.stringify(file)));

    let DATA = new CSV(file);

    if (file.filename) {
      //getting the path of the filename
      DATA.info.data = fs.readFileSync(file.filename.path);
      DATA.info.data = DATA.info.data.toString();
      console.log("data:", DATA.info.data);
      DATA.info.name = file.filename.name;
      console.log("name", DATA.info.name);
      //getting the type of the file eg,png,jpg
      DATA.info.contentType = file.filename.type;
      console.log("CT", DATA.info.contentType);
    }

    DATA.save((err, FILE) => {
      if (err) {
        return res.status(400).json({
          error: "failed to store the image",
        });
      }
      res.json(FILE);
    });
  });
};

//UPDATE/WRITE
exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.KeepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(400).json({
        error: "file no found",
      });
    }
    const { data } = fields;
    console.log("write working", data);

    let DATA = req.file;

    if (data) {
      //getting the path of the filename
      DATA.info.data = DATA.info.data + data + "\n";
    }

    DATA.save((err, FILE) => {
      if (err) {
        return res.status(400).json({
          error: "failed to store the image",
        });
      }
      res.json(FILE);
    });
  });
};

//DELETE/REMOVE
exports.remove = (req, res) => {
  let DATA = req.file;
  DATA.remove((err, deletedFile) => {
    if (err) {
      return res.status(400).json({
        error: "failed to remove the file",
      });
    }
    res.json({ message: "deletion successfull of file", deletedFile });
  });
};

//middleware for basic auth

exports.auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({ error: "no authentication passed" });
  }

  if (req.headers.authorization == "allow") {
    console.log("allowed");
    next();
  } else {
    return res.json({ error: "authorization failed" });
  }
};
