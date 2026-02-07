
import React from 'react';
import { ShieldCheck, Palette, Zap } from 'lucide-react';
import { ValueProp, Testimonial } from './types';

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 1,
    title: "Premium Fabrics",
    description: "We use moisture-wicking, pro-grade materials that withstand the toughest game-day conditions while keeping your athletes cool.",
    icon: "ShieldCheck"
  },
  {
    id: 2,
    title: "Infinite Customization",
    description: "From sublimation to intricate embroidery, our design team brings your wildest vision to life with zero creative limitations.",
    icon: "Palette"
  },
  {
    id: 3,
    title: "Fast Turnaround",
    description: "Get your custom gear in as little as 15 days. We prioritize your season schedule so you're never waiting on the sidelines.",
    icon: "Zap"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marcus T.",
    role: "Youth Basketball Coach",
    content: "I gave them our budget and expected them to say it wasn't enough. Instead, Colin designed something incredible that fit our number perfectly. The team hasn't stopped wearing them.",
    image: "https://picsum.photos/id/64/200/200",
    rating: 5
  },
  {
    id: 2,
    name: "Jennifer L.",
    role: "Softball Team Manager",
    content: "Finally—a company that doesn't waste your time with runaround pricing. They told me what it would cost, showed me what I'd get, and delivered exactly that. No surprises.",
    image: "https://picsum.photos/id/65/200/200",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos R.",
    role: "Esports Org Owner",
    content: "Most vendors make you feel bad for having a budget. Sultan Athletic made us feel like a pro team regardless of the number. The transparency is refreshing.",
    image: "https://picsum.photos/id/91/200/200",
    rating: 5
  }
];

export const SPORTS = [
  "Basketball",
  "Soccer / Football",
  "American Football",
  "Baseball / Softball",
  "Volleyball",
  "Esports",
  "Hockey",
  "Other"
];

export const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/5OSBU0K5RBGj8Wgt1JM8/webhook-trigger/5b82a02b-1d48-4e24-9961-6d65b2060c45";
