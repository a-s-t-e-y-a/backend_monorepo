import { db } from '../../../../db/connection';
import  {user}  from '../../../../db/schema/user';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const createUser = async (req: Request, res: Response) => {
    try {

        // Destructure data from request body
        const { name, email, password, phoneNumber } = req.body;
        const newPassword : string = await hashPassword(password)
        // Inser user data into the database
        const data = await db.insert(user).values({ name, email, password:newPassword, phoneNumber }).returning()

        console.log(data);

        res.json({
            data: data,
            message: 'User created successfully'
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            error: 'An error occurred while creating the user'
        });
    }
};
