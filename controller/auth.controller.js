const { read_file, write_file } = require("../fs/fs_api")


const Auth = {

    LOGIN_DATA: (_, res) => {

        res.render("auth/login", {
            title: "Kirish sahifasi",
            isLogin: false
        })

    }, 

    LOGIN: (req, res) => {

        const LoginData = req.body
        let user = read_file("users.json")[0]
        console.log(user);
        if(user.email == LoginData.email){
            if(user.password == LoginData.password){
                return res.redirect("/home")
            } else{
                return res.render("auth/login", {
                    isPassFalse: true
                })
            }
        } else{
            return res.render("auth/login", {
                isEmailFalse: true
            })
        }

    }

}


module.exports = Auth