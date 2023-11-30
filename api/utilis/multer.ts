import * as multer from 'multer';
import * as path from 'path';

const storage = multer.diskStorage({
  filename(req: Express.Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

export = storage;
