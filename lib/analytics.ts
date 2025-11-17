// Google Analytics 4 Integration

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom events for LogoMaster AI
export const trackLogoGeneration = (companyName: string, style: string) => {
  event({
    action: 'generate_logo',
    category: 'Logo',
    label: `${companyName} - ${style}`,
  });
};

export const trackDownload = (format: string) => {
  event({
    action: 'download_logo',
    category: 'Download',
    label: format,
  });
};

export const trackRating = (rating: number) => {
  event({
    action: 'rate_logo',
    category: 'Engagement',
    value: rating,
  });
};

export const trackShare = (platform: string) => {
  event({
    action: 'share_logo',
    category: 'Social',
    label: platform,
  });
};

export const trackTemplateUse = (templateName: string) => {
  event({
    action: 'use_template',
    category: 'Template',
    label: templateName,
  });
};
