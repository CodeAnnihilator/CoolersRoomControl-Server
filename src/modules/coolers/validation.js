import {body} from 'express-validator/check';

export const createCoolerValidator = ['model', 'brand', 'power', 'img'].map(item => body(item).not().isEmpty());
