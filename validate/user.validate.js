class Validate {
    postValidate(req, res, next){
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
        next();
    }
}

module.exports = Validate = new Validate();