import * as Yup from 'yup';

export const SingUpSchema = Yup.object({
	name: Yup.string().min(5).max(25).required('Pleace Enter Your Name.'),
	email: Yup.string().email().required('Pleace Enter Your Email'),
	password: Yup.string().min(8).required('Pleace Enter your Password'),
	retype_password: Yup.string()
		.required()
		.oneOf([Yup.ref('password', null)], 'Password Must Match'),
});
