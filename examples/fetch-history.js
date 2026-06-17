async function getHistory(from, to, days = 365) {
  const url = new URL('https://fxpeek.com/api/history');
  url.searchParams.set('from', from);
  url.searchParams.set('to', to);
  url.searchParams.set('days', String(days));

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`FXpeek API error: ${response.status}`);
  }

  return response.json();
}

const history = await getHistory('CNY', 'TRY', 30);
console.log(history.rates.slice(0, 5));

