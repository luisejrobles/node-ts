import { Request, Response } from 'express';

export class Routes {
    public Routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfull!'
                })
            })

        // Contacts
        app.route('/contact')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET contact request successful!'
                })
            })

        // Get a specific contact
        app.route('/contact/:id')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "GET specific contact successful!"
                })
            })

            // POST endpoints
            // Create a new user
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: "POST new contact successfull!"
                })
            })

            // PUT
            // Updating a contact
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'PUT request successfull!'
                })
            })

            // DELETE
            // Deleting a user
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'DELETE request successfull!'
                })
            })
    }
}