import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        //validation
        if (!name) {
            return res.send({ error: 'Name is Requires' })
        }
        if (!email) {
            return res.send({ error: 'Email is Requires' })
        }
        if (!password) {
            return res.send({ error: 'Password is Requires' })
        }
        if (!phone) {
            return res.send({ error: 'phone is Requires' })
        }
        if (!address) {
            return res.send({ error: 'Address is Requires' })
        }
        //check user 
        const existingUser = await userModel.findone({ email })
        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already Register please login ',
            })
        }
        //register user 
        const hashedPassword = await hashedPassword(password)
        //save
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword
        }).save()

        res.status(201).send({
            success: true,
            message: 'user Register Successfully',
            user


        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })
    }
};
