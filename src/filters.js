import dateFns from 'date-fns';

export function getHost(url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const parts = host.split('.').slice(-3);
  if (parts[0] === 'www') {
    parts.shift();
  }
  return parts.join('.');
}

export function getTimeSince(timestamp) {
  return `${dateFns.distanceInWordsStrict(new Date(), timestamp * 1000)} ago`;
}

export function getFormattedDate(timestamp) {
  return dateFns.format(timestamp * 1000, 'MMM D, YYYY [at] h:mm a');
}
