import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
    user?: any;
}

const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY!) as any;
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).send({ error: 'Invalid token.' });
    }
};

export default authenticate;