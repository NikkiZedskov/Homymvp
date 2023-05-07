import connectToDatabase from '../../lib/db';
import Member from '../../models/member';

export async function totalDocuments() {
  await connectToDatabase();
  
  try {
    const totalDocuments = await Member.countDocuments();
    const response = { total: totalDocuments + 2210 };
    return response;
  } catch (error) {
    console.error('Error executing countDocuments():', error);
    throw error;
  }
}

export default async function handler(req, res) {
  try {
    const response = await totalDocuments();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}