const mongoose = require("mongoose");

const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});


const User = mongoose.model("userchat", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().label("First Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };