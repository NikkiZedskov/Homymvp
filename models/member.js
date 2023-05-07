import mongoose from 'mongoose';

// Define Mongoose schema for form data
const formDataSchema = new mongoose.Schema({
  name: { type: String },
  city: { type: String },
  email: { type: String, required: true },
  formType: { type: String, required: true },
});

// Define Mongoose model for form data
const Member = mongoose.models.Member || mongoose.model('Member', formDataSchema);

module.exports = Member;