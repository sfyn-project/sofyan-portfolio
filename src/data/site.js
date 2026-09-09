export const site = {
  name: 'Sofyan Syahri Huzaini',
  role: 'Backend Developer',
  location: 'Indonesia',
  linkedin: 'https://www.linkedin.com/in/sofyanshuzaini',
  github: '', // Add when the public profile/repositories are ready.
  email: 'sofyanshuzaini@gmail.com',
  whatsappNumber: '0857 4509 7373',
  whatsapp: 'https://wa.me/6285745097373',
  photo: '/Foto_Formal.jpeg',
  cv: '/Sofyan_Syahri_Huzaini_Backend_Developer_CV_ATS.pdf',
}

export const projects = [
  {
    id: '01',
    category: 'professional',
    type: 'Professional Case Study',
    title: 'Admin Orin: Digitizing Customer Onboarding & Field Operations',
    description:
      'An internal operational platform that replaced fragmented manual handoffs with traceable workflows across sales, inventory, technician visits, payment, customer provisioning, role-based Kanban, reseller operations, and monitoring.',
    tech: ['Laravel', 'MySQL', 'REST API', 'System Design'],
    href: '/work/orin-operational-platform',
    featured: true,
  },
  {
    id: '02',
    category: 'professional',
    type: 'Professional Case Study',
    title: 'Orin GPS Tracking Platform',
    description:
      'Worked on the core GPS tracking platform, focusing on telemetry processing, GPS location validation, journey reporting, and protocol-based device integrations.',
    highlights: [
      'Filtered abnormal GPS coordinate jumps to improve tracking accuracy',
      'Built moving, idle, and stopped classification from telemetry data',
      'Processed journey data for distance, driving duration, stops, and locations',
      'Integrated GPS devices by decoding protocol messages into structured telemetry',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'GPS Telemetry', 'Device Protocols'],
    href: '/work/orin-gps-tracking',
  },
  {
    id: '03',
    category: 'personal',
    type: 'Active Personal System',
    title: 'AI-Powered Personal Finance Bot',
    description:
      'A Telegram bot I actively use for day-to-day personal finance tracking, automated reporting, and natural-language interaction with my financial data.',
    highlights: [
      'Daily transaction tracking and categorization',
      'Automated monthly reports and financial summaries',
      'Stable AI-powered Q&A over recorded finance data',
    ],
    tech: ['Telegram Bot API', 'Google Apps Script', 'Google Sheets', 'AI Integration'],
  },
  {
    id: '04',
    category: 'personal',
    type: 'Data / Experimental Project',
    title: 'Stock Screening & Strategy Evaluation',
    description:
      'A multi-strategy stock screener that records every screening result and subsequent return so strategy performance can be evaluated over time.',
    highlights: [
      'Six screening strategies for different market setups',
      'Automated signal and return history in Google Sheets',
      'Average return and profitability comparison by strategy',
    ],
    strategyNote: 'MA Proximity · Simple Momentum · Value Recovery · Kombo Maut · Weak Market · ARA Hunter',
    tech: ['PHP', 'Market Data API', 'Google Sheets', 'Technical Analysis'],
  },
]
