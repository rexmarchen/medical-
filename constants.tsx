
import React from 'react';
import { Testimonial, FAQItem, BlogPost, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'lab-booking',
    title: 'Online Lab Booking',
    description: 'Quick, secure, and convenient lab scheduling with reliable results and minimal wait times.',
    icon: '🧪',
    path: '/services/lab-booking'
  },
  {
    id: 'gyn-exam',
    title: 'Annual Gynecological Exams',
    description: 'Preventive women’s healthcare focused on early detection, comfort, and long-term wellness.',
    icon: '🌸',
    path: '/services/gyn-exam'
  },
  {
    id: 'lactation',
    title: 'Lactation Specialists',
    description: 'Expert breastfeeding support for new and expecting parents — from latch guidance to ongoing feeding success.',
    icon: '🤱',
    path: '/services/lactation'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Sarah M.', rating: 5, text: 'Scheduling my lab tests online was so easy. The staff was kind, professional, and I had my results quickly.', service: 'Lab Services' },
  { id: '2', name: 'Amanda R.', rating: 5, text: 'My annual gynecological exam felt comfortable and respectful. The provider explained everything clearly.', service: 'Annual Exam' },
  { id: '3', name: 'Jessica L.', rating: 5, text: 'The lactation consultant helped me gain confidence with breastfeeding. Truly life-changing support.', service: 'Lactation Support' },
  { id: '4', name: 'Emily S.', rating: 5, text: 'Professional, calm, and informative. I felt completely at ease.', service: 'Annual Exam' },
  { id: '5', name: 'Rachel D.', rating: 5, text: 'The online booking saved me so much time.', service: 'Lab Services' },
  { id: '6', name: 'Hannah K.', rating: 5, text: 'I finally felt confident feeding my baby.', service: 'Lactation Support' }
];

export const FAQS: FAQItem[] = [
  { question: 'Do you accept insurance?', answer: 'Yes, we accept most major insurance plans. Please contact us to confirm coverage.' },
  { question: 'Can I book lab tests online?', answer: 'Absolutely. Our online lab booking is fast, secure, and available 24/7.' },
  { question: 'Do I need a referral for lactation services?', answer: 'In many cases, no referral is required. Insurance requirements may vary.' },
  { question: 'How long does an annual gynecological exam take?', answer: 'Typically 30–45 minutes, depending on your needs.' },
  { question: 'What should I bring to my appointment?', answer: 'A valid ID, insurance card, and any relevant medical history.' },
  { question: 'Is same-day scheduling available?', answer: 'Yes, same-day appointments may be available based on availability.' }
];

export const BLOG_POSTS: BlogPost[] = [
  { id: '1', title: 'How Convenience Matters in Healthcare — Lessons from the Best Restaurant in Wrexham', excerpt: 'Importance of online booking and patient benefits compared to food delivery systems.', category: 'Customer Care', date: '2024-05-10' },
  { id: '2', title: 'What Clinics Can Learn from Family Restaurants in Wrexham About Customer Care', excerpt: 'Deep dive into service excellence and patient satisfaction.', category: 'Community', date: '2024-05-08' },
  { id: '3', title: 'Why Clean Environments Matter — Clinics vs Dine-In Restaurants Near Me', excerpt: 'Comparing medical sanitation standards with high-end hospitality.', category: 'Safety', date: '2024-05-05' }
];
