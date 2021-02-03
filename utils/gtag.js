export const GA_CONFIG = process.env.GA_TRACKING_ID ? `gtag('config', '${process.env.GA_TRACKING_ID}', {page_path: window.location.pathname,});` : ``
export const UA_CONFIG = process.env.UA_TRACKING_ID ? `gtag('config', '${process.env.UA_TRACKING_ID}', {page_path: window.location.pathname,});` : ``

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (process.env.NODE_ENV === 'production') {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_path: url,
    })
    window.gtag('config', process.env.UA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({action, category, label, value}) => {
  if (process.env.NODE_ENV === 'production') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
