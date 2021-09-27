const User = require('../model/User')
const Todo = require('../model/Todo')

const success = {
    error: null,
    message: "Task done successfully"
}
const failure = {
    data: null,
    message: "Error while fetching data"
}

const no_data = {
    error: null,
    message: "Not present in database"
}
const exists =  {
    error: null,
    message: "Already present in database"
}
exports.adduser = async (req, res) => {

    try {
        let user = await User.findOne({ email: req.body.email })
        // console.log(user.user_name)
        if (!user) {
            let new_user = await new User(req.body).save()
            return res.status(200).send({
                error: null,
                data: new_user,
                message: "User created successfully"
            })
        }else{
            return res.status(200).send(exists)
        }

    } catch (err) {
        return res.status(400).send({
            error: err.message,
            data: null,
            message: "Error while adding to the database"
        })
    }

};


exports.getalltodo = async (req, res) => {
    try {
        let id = req.params.id
        let user = await User.findById({ _id: id });
        // console.log(user.role)
        if(user.role == "admin"){
            let all_todo = await Todo.find()
            return res.status(200).send({success,data: all_todo})
        }
        if(user.role == "app_user"){
            let todo = await Todo.findOne({ user_name: id });
            console.log(todo)
            return res.status(200).json({success,data: todo})
        }
    } catch (err) {
        return res.status(400).send({
            failure,
            error: err.message
        })
    }
};




