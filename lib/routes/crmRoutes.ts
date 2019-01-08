import { Request, Response } from 'express';
import { ContactController } from '../controllers/crmControllers';

export class Routes {
    public contactController: ContactController = new ContactController();

    public Routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfull!'
                })
            })

        // Contacts
        app.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact)

        // Get a specific contact
        app.route('/contact/:id')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)

    }
}