
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
    description: "Get your custom gear in as little as 14 days. We prioritize your season schedule so you're never waiting on the sidelines.",
    icon: "Zap"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Coach Mike Henderson",
    role: "Lions Basketball Academy",
    content: "The quality is simply unmatched. Our jerseys still look brand new after a full 40-game season. The designers were incredible to work with.",
    image: "https://picsum.photos/id/64/200/200",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Elite Volleyball Club",
    content: "We needed a last-minute set for a national tournament and Elite Custom Jerseys delivered. The fit is perfect and the players love the feel.",
    image: "https://picsum.photos/id/65/200/200",
    rating: 5
  },
  {
    id: 3,
    name: "David Ross",
    role: "Metro Football League",
    content: "The online design inspiration tool helped us nail our brand identity. The communication throughout the process was seamless.",
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
