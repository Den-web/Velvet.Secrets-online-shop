import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

contactSchema.statics.findContactById = function (id, userId) {
  return this.findOne({ _id: id, userId });
};

contactSchema.statics.findContactByIdAndDelete = function (id, userId) {
  return this.findOneAndDelete({ _id: id, userId });
};

contactSchema.statics.findContactByIdAndUpdate = function (id, userId, update) {
  return this.findOneAndUpdate({ _id: id, userId }, update, { new: true });
};

export const Contact = mongoose.model('Contact', contactSchema);
