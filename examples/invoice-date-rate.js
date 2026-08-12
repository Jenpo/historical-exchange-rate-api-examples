const [requestedDate, from = 'USD', to = 'EUR'] = process.argv.slice(2);

if (!/^\d{4}-\d{2}-\d{2}$/.test(requestedDate || '')) {
  console.error('Usage: node examples/invoice-date-rate.js YYYY-MM-DD [FROM] [TO]');
  process.exit(1);
}

const url = new URL('https://fxpeek.com/api/history');
url.searchParams.set('from', from.toUpperCase());
url.searchParams.set('to', to.toUpperCase());
url.searchParams.set('days', '365');

const response = await fetch(url);
if (!response.ok) throw new Error(`FXpeek API error: ${response.status}`);

const data = await response.json();
const rows = Array.isArray(data.rates) ? data.rates : [];
const selected = rows
  .filter((row) => row.date <= requestedDate)
  .sort((a, b) => b.date.localeCompare(a.date))[0];

if (!selected) {
  throw new Error('No rate is available on or before the requested date in the 365-day response.');
}

console.log(JSON.stringify({
  requestedDate,
  actualSourceDate: selected.date,
  baseCurrency: data.from,
  quoteCurrency: data.to,
  rate: selected.rate,
  sourceUrl: url.toString(),
  retrievedAt: new Date().toISOString(),
  note: selected.date === requestedDate
    ? 'Exact source date matched.'
    : 'Used the latest available source date on or before the requested date.',
}, null, 2));
