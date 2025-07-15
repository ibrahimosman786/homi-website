import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, investment_budget, message } = req.body;
    const { data, error } = await supabase
      .from('inquiries')
      .insert([{ name, email, phone, investment_budget, message }]);
    if (error) return res.status(500).json({ error: error.message });
    // TODO: Send brochure email here
    return res.status(200).json({ success: true });
  }
  res.status(405).json({ error: 'Method not allowed' });
} 