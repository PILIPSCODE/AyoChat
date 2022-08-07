const router = require("express").Router();
const { User } = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");




router.post("/tokenisValid" , async (req,res) => {
	try {
		const token = req.header("token")
		if(!token){
			return res.json(false)
		} 
		const verifed = jwt.verify(token,process.env.JWTPRIVATEKEY)

		if(verifed) {return res.json(true)}

		const user = await User.findById(verifed._id)
	    if(!user) {return res.json(false)}
        return res.json(true)

	} catch (error) {
		res.status(500).json({msg:error})
	}
})

router.post("/login", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY , {
			expiresIn: "7d",
		})
		res.json({
			token:token,
			users:{
				id:user._id,
				name:user.name,
				email:user.email
			}
			
		})
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});



const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};









module.exports = router;
