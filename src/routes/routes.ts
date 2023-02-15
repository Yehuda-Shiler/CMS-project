import { Router } from 'express'
import { validateCreateItem, validateUpdateItem, validateIdOfItem } from '../middleware/validators'
import { createNewItem } from '../controllers/create-controller'
import { editItem } from '../controllers/edit-controller'
import { getItem } from '../controllers/get-controller'
import { deleteItem } from '../controllers/delete-controller'
import { loginUser, createUser } from '../controllers/user-contrller'
import { authenticateToken, authenticateRole } from '../middleware/authorization'
export const router = Router()

//post create user
router.post('/createUser', createUser);

//post login
router.post('/login', loginUser);

// Put new item
router.put('/createNewItem', [authenticateToken, validateCreateItem], createNewItem)

// Post edit item
router.post('/editItem', [authenticateToken, authenticateRole, validateUpdateItem], editItem)

// Get by ID Method
router.get('/getItem', [authenticateToken, validateIdOfItem], getItem)

// Delete by ID Method
router.delete('/deleteItem', [authenticateToken, validateIdOfItem], deleteItem)

module.exports = { router }
