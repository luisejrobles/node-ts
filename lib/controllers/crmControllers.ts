import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {

    public addNewContact(req: Request, res: Response) {
        let newContact = new Contact(req.body);
        newContact.save((contact, err) => {
            (err) ? res.send(err) : res.send(contact);
        })
    }

    public getContacts(req: Request, res: Response) {
        Contact.find({}, (contact, err) => {
            (err) ? res.send(err) : res.send(contact.json);
        })
    }

    public getContactWithID(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (contact, err) => {
            (err) ? res.send(err) : res.json(contact);
        })
    }

    public updateContact(req: Request, res: Response) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, { new: true }, (contact, err) => {
            (err) ? res.send(err) : res.json(contact);
        })
    }

    public deleteContact(req: Request, res: Response) {
        Contact.deleteOne({ _id: req.params.contactId }, (contact, err) => {
            (err) ? res.send(err) : res.json({ message: 'Successfully deleted contact!' })
        })
    }
}