import express from 'express';
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} from '../../controllers/contacts.js';
import { authenticate } from '../../middlewares/authenticate.js';
import { validateBody } from '../../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from '../../schemas/contacts.js';

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', getAllContacts);

contactsRouter.get('/:id', getOneContact);

contactsRouter.delete('/:id', deleteContact);

contactsRouter.post('/', validateBody(createContactSchema), createContact);

contactsRouter.put('/:id', validateBody(updateContactSchema), updateContact);

contactsRouter.patch('/:id/favorite', validateBody(updateFavoriteSchema), updateStatusContact);

export default contactsRouter;
