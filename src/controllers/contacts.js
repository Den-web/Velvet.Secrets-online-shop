import { Contact } from '../models/contact.js';
import { HttpError } from '../helpers/HttpError.js';

export const getAllContacts = async (req, res) => {
  const { _id: userId } = req.user;
  const result = await Contact.find({ userId });
  res.json(result);
};

export const getOneContact = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findContactById(id, userId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findContactByIdAndDelete(id, userId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'Contact deleted' });
};

export const createContact = async (req, res) => {
  const { _id: userId } = req.user;
  const result = await Contact.create({ ...req.body, userId });
  res.status(201).json(result);
};

export const updateContact = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findContactByIdAndUpdate(id, userId, req.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

export const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findContactByIdAndUpdate(id, userId, req.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};
