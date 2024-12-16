import { Router } from 'express';
const router = Router();
import {getAddTask,getAllTasks,storeAddedTask,deleteTask,getSpecificTask} from '../controllers/TasksControllers'
import { validateAddTask, validateTaskId } from '../middlewares/TasksValidator';
import { validateRequest } from '../middlewares/ValidationErrorHandler.middleware';


// /task
router.get('/addTask', getAddTask);
router.get('/', getAllTasks)
router.get('/allTasks', getAllTasks);
router.get('/:mohsen', validateTaskId, validateRequest , getSpecificTask);    

router.post('/addTask', validateAddTask, validateRequest, storeAddedTask);

router.post('/delete/:mohsen', validateTaskId, validateRequest, deleteTask);

export default router;
