import {  Request, Response } from 'express';

export class Routes {
    public Routes(app): void {
        app.route('/')
        .get( (req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfull!'
            })
        })
    }
}