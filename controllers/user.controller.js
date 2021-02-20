const db = require('../db');
shortid = require('shortid');

class UserController {

    // [GET] /user
    index(req, res, next){
        res.render('./user/index', {
            users: db.get('users').value()
        })
    }
    // [GET] /user/search
    search(req, res,next){
        var q = req.query.name;
        console.log(q)
        var users = db.get('users').value();
    
        var matchUser = users.filter(function (user) {
            return user.name.indexOf(q) !== -1;
        });
    
        res.render('./user/index', {
            users: matchUser,
            value: q
        });
    }

    // [GET] /create
    create(req, res, next){
        res.render('./user/create')
    }
    
    // [POST] /create
    createPost(req, res, next){
        var errors = [];
        if(!req.body.name){
            errors.push("name is required!!!");
        }
        if(!req.body.phone){
            errors.push("phone is required!!!");
        }
        if(errors.length){
            res.render('./user/create',{
                errors: errors,
                values: req.body
            })
            return;
        }
        req.body.id = shortid.generate();
        db.get('users').push(req.body).write();
    
        res.redirect('/user')
    }
    
    // [GET] /user/:id
    viewDetail(req, res, next){
        var id = req.params.id;
        var user = db.get('users').find({ id: id }).value();
    
        res.render('./user/view', {
            user: user
        });
    }
}

module.exports = UserController = new UserController();