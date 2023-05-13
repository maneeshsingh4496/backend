import express from 'express';
import {
 searchDataHandler,
} from '../controllers/search-data/searchData.controller';
import { loginUserSchema } from '../schema/user.schema';

import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { validate } from '../middleware/validate';


const router = express.Router();

// router.use(deserializeUser, requireUser);

router.post('/:collectionName',  searchDataHandler);

export default router;
