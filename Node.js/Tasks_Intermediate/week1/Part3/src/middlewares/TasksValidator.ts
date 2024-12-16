import { body, param } from 'express-validator';

export const validateAddTask = [
  body('name')
    .isString()
    .withMessage('Task name must be valid string')
    .notEmpty()
    .withMessage('Task name is required')
    .isLength({ min: 10 })
    .withMessage('The task name must be at least 10 characters long')
    .isLength({ max: 150 })
    .withMessage('The task name must be at most 150 characters long'),

  body('date')
    .notEmpty()
    .withMessage('Date is required')
    .isDate()
    .withMessage('Invalid date format'),

  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isString()
    .withMessage('Description must be a valid string'),
];

export const validateTaskId = [
  param('mohsen')
    .isMongoId()
    .withMessage('Invalid task ID'),
];
