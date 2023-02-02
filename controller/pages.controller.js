const { read_file, write_file } = require("../fs/fs_api")
const path = require("path")
const upload = require("express-fileupload")


const Auth = {

    HOME: (_, res) => {

        let ads = read_file("ads.json")

        let TrueAds = []

        for(let i = ads.length-1; i >= 0; i--){
            if(ads[i].invisible == true){
                TrueAds.push(ads[i])
            }
        }

        console.log(TrueAds);
        
        res.render("pages/home", {
            title: "Bosh sahifa",
            isLogin: true,
            ads: TrueAds
        })

    },

    ADD_PAGE: (_, res) => {

        res.render("pages/add_ad", {
            title: "Eʼlon berish",
            isLogin: true
        })

    },

    ADDING_PAGE: (req, res) => {

        let things = req.body
        console.log(things);
        let ads = read_file("ads.json")
        let arr = []
        if(things.tel_num.length != 13){
            return res.render("pages/add_ad", {
                isFirstTelFalse: true,
                isLogin: true
            })
        }
        if(things.extra_tel_num.length != 13){
            return res.render("pages/add_ad", {
                isSecondTelFalse: true,
                isLogin: true
            })
        }
        let Sana = things.date
        things.date = Sana[8] + Sana[9] + "/" + Sana[5] + Sana[6] + "/" + Sana[0] + Sana[1] + Sana[2] + Sana[3]
        console.log(things.date);
        things.title = things.title.toUpperCase()
        if(ads == []){
            ads.push({id: 1, ...things})
        } else{
            for(let i of ads){
                arr.push(i.id)
            }
            ads.push({id: Math.max(...arr) + 1, ...things, invisible: false})
        }
        write_file("ads.json", ads)
        res.redirect("/home")

    },

    ABOUT_US: (_, res) => {

        res.render("pages/about_us", {
            title: "Biz haqimizda",
            isLogin: true
        })
        
    },

    ADMIN: (req, res) => {

        let ads = read_file("ads.json")
        let Ads = []

        for(let i = ads.length-1; i >= 0; i--){
            if(ads[i].invisible == false){
                Ads.push(ads[i])
            }
        }

        console.log(ads);

        res.render("pages/admin", {
            isLogin: true,
            ads: Ads
        })

    },

    CANCEL: (req, res) => {

        let ads = read_file("ads.json")
        let adId = req.params.id

        ads.forEach((ad, idx) => {
            if(ad.id == adId){
               ads.splice(idx, 1)
            }
        })

        write_file("ads.json", ads)
        return res.redirect("/admin")

    },

    CONFIRM: (req, res) => {

        let ads = read_file("ads.json")
        let adId = req.params.id

        ads.forEach((ad) => {
            if(ad.id == adId){
               ad.invisible = true
            }
        })

        write_file("ads.json", ads)
        return res.redirect("/admin")

    }

}


module.exports = Auth