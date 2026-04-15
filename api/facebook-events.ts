
import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || process.env.VITE_META_ACCESS_TOKEN;
const PIXEL_ID = process.env.META_PIXEL_ID || process.env.VITE_META_PIXEL_ID;

const hashValue = (val: string) => {
  if (!val) return '';
  return crypto
    .createHash('sha256')
    .update(val.trim().toLowerCase())
    .digest('hex');
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

    if (!ACCESS_TOKEN || !PIXEL_ID) {
      console.error('Missing Meta credentials');
      return res.status(500).json({ 
        error: 'Server configuration error', 
        details: 'Missing META_ACCESS_TOKEN or META_PIXEL_ID in environment variables' 
      });
    }

    try {
      const { eventName, userData, customData, eventSourceUrl, eventID, fbp, fbc } = req.body;

      if (!eventName) {
        return res.status(400).json({ error: 'Missing eventName' });
      }

      const payload = {
        data: [
          {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
            event_source_url: eventSourceUrl,
            event_id: eventID,
            user_data: {
              em: userData?.email ? [hashValue(userData.email)] : [],
              ph: userData?.phone ? [hashValue(userData.phone)] : [],
              fn: userData?.name ? [hashValue(userData.name)] : [],
              fbp: fbp || undefined,
              fbc: fbc || undefined,
              client_ip_address: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
              client_user_agent: req.headers['user-agent'],
            },
            custom_data: customData || {},
          },
        ],
      };

      const response = await fetch(
        `https://graph.facebook.com/v17.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      
      if (!response.ok) {
        console.error('Meta API Response Error:', result);
        return res.status(response.status).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      console.error('Meta CAPI Unexpected Error:', error);
      return res.status(500).json({ error: 'Failed to send event', details: error.message });
    }
}
