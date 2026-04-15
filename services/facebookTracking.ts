
/**
 * Facebook Tracking Service
 * Handles both browser-side Pixel events and server-side Conversions API (CAPI)
 */

interface UserData {
  email?: string;
  phone?: string;
  name?: string;
}

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

export const trackMetaEvent = async (
  eventName: string,
  userData: UserData = {},
  customData: any = {}
) => {
  const eventID = eventName + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

  // 1. Browser-side tracking (Pixel)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, {
      ...customData,
    }, {
      eventID
    });
  }

  // 2. Server-side tracking (CAPI) via our API route
  try {
    const response = await fetch('/api/facebook-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        userData,
        customData,
        eventID,
        eventSourceUrl: window.location.href,
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc'),
      }),
    });
    
    if (!response.ok) {
      console.error('CAPI track failed:', await response.json());
    }
  } catch (err) {
    console.error('CAPI track error:', err);
  }
};

export const initMetaPixel = (pixelId: string) => {
  if (typeof window === 'undefined') return;
  
  // Standard Pixel Initialization Snippet
  !(function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  (window as any).fbq('init', pixelId);
  (window as any).fbq('track', 'PageView');
};

export const initClarity = (clarityId: string) => {
  if (typeof window === 'undefined') return;
  
  (function(c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
    c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", clarityId);
};