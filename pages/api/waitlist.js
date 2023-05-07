import connectToDatabase from '../../lib/db';
import Member from '../../models/member';

export default async function handler(req, res) {
  // Awaiting connection to the database
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, city, email, formType } = req.body;

    try {
      // Save member data to the database
      await Member.create({ name, city, email, formType });
      res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving form data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}