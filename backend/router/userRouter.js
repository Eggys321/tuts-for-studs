const express = require('express');
const router = express.Router();
const {create_user, getAll_users, update_user, delete_user, single_user} = require('../controller/userController')


// post user, C -- for create
router.post('/',create_user)

// get users, R -- for read

router.get('/',getAll_users)

// update user, U -- for update
router.patch('/:id',update_user)

// delete user, D -- for delete
router.delete('/:id',delete_user)

// params for single user

router.get('/:id',single_user)



module.exports = router