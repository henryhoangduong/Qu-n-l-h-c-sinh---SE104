function authTeacher(req,res,next){
    if (req.body.role==='teacher') {
        next();
    } else {
        return res.status(401).json(
            'You are not authorized'
        )
    }
}

function authStudent(req,res,next) {
        if (req.body.role==='student') {
        next();
    } else {
            return res.status(401).json(
            'You are not authorized'
        )
    }
}

function authAdmin(){
    if (req.body.role === 'admin') {
        next();
    } else {
        return res.status(401).json(
            'You are not authorized'
        )
    }
}