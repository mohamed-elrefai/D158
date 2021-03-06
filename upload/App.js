const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'image');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `Say-Image ${Date.now()}.${ext}`)
    }
});
const upload = multer({storage: multerStorage});

module.exports = upload;