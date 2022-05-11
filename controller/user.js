const data=require("../mynewfile.json")
const fs=require("fs")


get_data=(req,res)=>{
    res.send(data)
}

get_By_Id=(req,res)=>{
    const { id }=req.params;
    const cource_Found=data.find((course)=>course.id==id);
    if(cource_Found){
        res.send(cource_Found);
    }else{
        res.send("the course with given id ${res.params.id}")
    }
}

get_Update_Id = (req, res) => {
    const { id } = req.params;
    const cource_Found = data.find((course) => course.id == id)
    if (cource_Found) {
        cource_Found.name = req.body.name;
        cource_Found.logo = req.body.logo;
        cource_Found.notes = req.body.notes;
        cource_Found.days_to_complete = req.body.days_to_complete;
        cource_Found.short_description = req.body.short_description;
        cource_Found.type = req.body.type;
        cource_Found.course_type = req.body.course_type;
        cource_Found.lang_available = req.body.lang_available;
        fs.writeFileSync('mynewfile.json', JSON.stringify(data, null, 4));
        res.send('user with the id ${id} has been updated')
    } else {
        res.status(404).send('The course with given id ${req.params.id}  not found in database.')
    }
}

delete_course=(req,res)=>{
    var { id }=req.params;
    delet_data=data.filter((course)=>course.id!== id)
    if (delet_data){
        fs.writeFileSync('mynewfile.json', JSON.stringify(delet_data, null, 4));
        res.send("course with id${id}")
    }else {
        res.status(404).send('The course with given id ${req.params.id}  not found in database.')
    }
}

post_course=(req,res)=>{
        dict={
            id:req.body.id,
            name : req.body.name,
            logo : req.body.logo,
            notes : req.body.notes,
            days_to_complete : req.body.days_to_complete,
            short_description : req.body.short_description,
            type : req.body.type,
            course_type : req.body.course_type,
            lang_available : req.body.lang_available
            }
            data.push(dict)
            fs.writeFileSync('mynewfile.json', JSON.stringify(data, null, 4));
            res.send('user with the id ${id} has been post')
      
    } 
 
module.exports={get_data,get_By_Id,get_Update_Id,delete_course,post_course} 