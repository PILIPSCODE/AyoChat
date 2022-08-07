const jwt = require("jsonwebtoken")

module.exports = (req,res,next) => {
    const token = req.header('token')
    if(!token){
        return res.status(401).json({msg:"notoken - authorization"})
    }
    try {
        const verifed = jwt.verify(token,process.env.JWTPRIVATEKEY)
        if(!verifed) return res.status(401).json({msg:"Cannot verifikasi  - authorization denied"})
       req.user = verifed
        next()
    } catch (error) {
        res.status(401).json({msg:error})
    }
}