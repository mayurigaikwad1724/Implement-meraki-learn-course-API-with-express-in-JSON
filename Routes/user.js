const express=require("express")
const router=express.Router()
const cource_data=require("../controller/user")

router.get('/courses',cource_data.get_data)

router.get('/courses/:id',cource_data.get_By_Id)

router.put('/courses/Update/:id',cource_data.get_Update_Id)

router.delete('/courses/delete/:id',cource_data.delete_course)

router.post('/courses/post',cource_data.post_course)

module.exports=router