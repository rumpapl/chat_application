// external imports
const multer = require("multer");
const path = require("path");
const createError = require("http-errors");

function uploader(
  subfolder_path,
  allowed_file_types,
  max_file_size,
  error_msg
) {
  // File upload folder
  const UPLOAD_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

  // define storage
  const storage = multer.diskStorage({
    distination: (req, file, cb) => {
      cb(null, UPLOAD_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fileName + fileExt);
    },
  });

  // prepare the final multer upload object
  const upload = multer({
    storage: storage,
    limits: {
      fieldSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_msg));
      }
    },
  });

  return upload;
}

module.exports = uploader;
