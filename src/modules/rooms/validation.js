import {body} from 'express-validator/check';

export const saveRoomValidator = body('coolers').not().isEmpty();
