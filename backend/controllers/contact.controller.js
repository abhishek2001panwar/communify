
import {Contact} from "../models/contact.model.js";
export const createContact = (req, res) => {
    const { name, email, message, subject  } = req.body;
    if (!name || !email || !message || !subject) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    const newContact = new Contact({
        name,
        email,
        subject,
        message,
    });
    newContact.save().then((contact) => res.json(contact));

}