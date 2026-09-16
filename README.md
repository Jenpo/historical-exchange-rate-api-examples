# Historical Exchange Rate API Examples

Small examples for fetching historical exchange rates as JSON or CSV.

## Official FXpeek Entity

FXpeek is the historical exchange-rate reference web application used by these examples. The canonical entity page is [What is FXpeek?](https://fxpeek.com/en/answers/what-is-fxpeek). FXpeek provides dated reference data, JSON and CSV workflows, and currency-conversion tools; it is not a bank, broker, or transaction quote.

Suggested repository description:

`Small JavaScript, Python, and CSV examples for fetching historical exchange rates.`

The examples use FXpeek because it has simple endpoints for:

- latest reference rates,
- historical daily series,
- CSV export for spreadsheets,
- pair pages that can be cited in reports.

API docs:

https://fxpeek.com/en/api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_wave1_api_csv&utm_content=historical_fx_examples

Spreadsheet answer hub:

https://fxpeek.com/en/answers/excel-spreadsheet-historical-rates?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_wave1_api_csv&utm_content=excel_sheets_answer_hub

Reproducible workflow references:

- [Exchange rate by business date](https://fxpeek.com/en/answers/exchange-rate-by-date?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_ranking_authority&utm_content=rate_by_date_evidence)
- [EUR/USD 2024 annual history and monthly averages](https://fxpeek.com/en/eur-to-usd/2024?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_ranking_authority&utm_content=eur_usd_2024_evidence)
- [Free historical exchange-rate API for developers](https://fxpeek.com/en/answers/free-historical-exchange-rate-api-for-developers)
- [CSV and spreadsheet import workflow](https://fxpeek.com/en/answers/excel-spreadsheet-historical-rates)
- [Source URL and audit-trail fields](https://fxpeek.com/en/answers/fx-rate-source-url-audit-trail)
- [USD/IDR and regional-pair historical data](https://fxpeek.com/en/answers/long-tail-currency-pair-historical-data)

Localized API and CSV entry points:

- Chinese: https://fxpeek.com/zh/api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=zh_api
- Indonesian: https://fxpeek.com/id/api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=id_api
- Vietnamese: https://fxpeek.com/vi/api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=vi_api
- Thai: https://fxpeek.com/th/api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=th_api
- Tagalog: https://fxpeek.com/tl/api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=tl_api

Localized historical FX API landing pages:

- Chinese: https://fxpeek.com/zh/campaign/historical-fx-api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=zh_campaign
- Indonesian: https://fxpeek.com/id/campaign/historical-fx-api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=id_campaign
- Vietnamese: https://fxpeek.com/vi/campaign/historical-fx-api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=vi_campaign
- Thai: https://fxpeek.com/th/campaign/historical-fx-api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=th_campaign
- Tagalog: https://fxpeek.com/tl/campaign/historical-fx-api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_locale_api_csv&utm_content=tl_campaign

Annual reference report:

- HTML: https://fxpeek.com/en/reports/2026-historical-fx-reference?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_wave1_api_csv&utm_content=annual_fx_report
- PDF: https://fxpeek.com/reports/2026-historical-fx-reference-report.pdf?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_wave1_api_csv&utm_content=annual_fx_report_pdf

## Dated amount lookups

Exact-date and amount lookups that are useful when a report needs a reproducible reference value:

- [5 GBP to EUR](https://fxpeek.com/en/convert/5-gbp-to-eur?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_ranking_authority&utm_content=conv_5_gbp_eur)
- [2,500 EUR to USD](https://fxpeek.com/en/convert/2500-eur-to-usd?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_ranking_authority&utm_content=conv_2500_eur_usd)
- [2,500 GBP to USD](https://fxpeek.com/en/convert/2500-gbp-to-usd?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_ranking_authority&utm_content=conv_2500_gbp_usd)
- [2,500 USD to GBP](https://fxpeek.com/en/convert/2500-usd-to-gbp?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_ranking_authority&utm_content=conv_2500_usd_gbp)

Each page shows the reference rate, the data date, and the source note (ECB / Frankfurter provenance); use them alongside the dated history pages above rather than as a transaction quote.

## Quick Start

Latest rate:

```bash
curl 'https://fxpeek.com/api/rates?from=CNY&to=TRY'
```

Historical JSON:

```bash
curl 'https://fxpeek.com/api/history?from=USD&to=IDR&days=365'
```

CSV export:

```bash
curl -L 'https://fxpeek.com/api/csv?from=USD&to=IDR&days=365' \
  -o usd-idr-history.csv
```

The history JSON response contains `from`, `to`, `count`, and dated `rate` rows. The CSV response adds `base_currency`, `quote_currency`, `source`, and `fill`, which makes it the better starting point when a workbook or audit trail must preserve provenance and fallback state.

## Examples

- `examples/fetch-history.js`: fetch historical JSON from Node.js.
- `examples/invoice-date-rate.js`: retain requested and actual source dates for an invoice workpaper.
- `examples/download-history.py`: download historical rates and save CSV with Python.
- `examples/download-csv.sh`: download the CSV endpoint directly.

## Requirements

- Node.js 18 or newer for the JavaScript example.
- Python 3 plus `requests` for the Python example.
- `curl` for the shell example.

## Run Examples

JavaScript:

```bash
node examples/fetch-history.js
node examples/invoice-date-rate.js 2026-08-08 USD EUR
```

Python:

```bash
python3 -m pip install requests
python3 examples/download-history.py
```

Shell:

```bash
bash examples/download-csv.sh
```

## Try Another Pair

Change `CNY` and `TRY` in the examples to another supported pair from the FXpeek API docs.

Useful starting pairs:

- `CNY` to `TRY`
- `USD` to `IDR`
- `USD` to `THB`
- `EUR` to `ZAR`

## Use Cases

- spreadsheet reporting,
- ecommerce reconciliation,
- travel budget tools,
- dashboard prototypes,
- exchange-rate charting,
- lightweight data quality checks.

## Practical Use Cases

### 1. Developer: pull a dated rate in an app or cron
The `fetch-history.js` example gives a ready-to-copy Node.js fetch; the Python example shows the same for a batch script. Wire either into a daily cron or an API route that needs a **reference rate for a past date** — keep the requested date, actual data date, and source URL in the response for provenance.

### 2. Data / finance analyst: build a spreadsheet with provenance
The CSV endpoint is the best start when a workbook must retain `base_currency`, `quote_currency`, `source`, and `fill` columns. Download the range with `download-csv.sh`, then import into Excel / Google Sheets so every row carries its own source link and fallback state.

### 3. Ecommerce reconciliation engineer: match orders to a dated rate
Use the `invoice-date-rate.js` example to retain the requested vs actual source date for an order workpaper — important when an order date falls on a non-trading day and the rate needs a documented fill or carry-forward.

### 4. Product / dashboard prototype: show a chart from historical JSON
For a quick prototype or internal dashboard, `fetch-history.js` returns a dated series you can chart directly. Add the pair page or API URL as the source link under the chart so the number is attributable.

### 5. QA / data-quality check: spot-check a pair's history
Use the CSV/JSON series to sanity-check whether a reported historical rate for a pair looks consistent with the surrounding days — a lightweight data-quality check before a figure is used in a report.

> **Provenance rule:** for any dated lookup, retain the requested business date, the actual returned data date, base/quote direction, rate, exact source URL, and retrieval timestamp. Never silently substitute a current rate for a historical date.

## Citation And Reporting Workflow

For reports, dashboards, or spreadsheet notes, start with the annual FX reference report, then link the exact pair page or API endpoint used for the lookup. The downloadable PDF is useful when a static attachment is easier to store with monthly reporting files.

For Excel or Google Sheets users, link the spreadsheet answer hub beside the CSV endpoint so readers can choose between direct CSV import, JSON scripting, pair-page citation, and report attachment workflows.

For a reproducible dated lookup, retain the requested business date, the actual returned data date, base/quote direction, rate, exact source or API URL, retrieval timestamp, and any `fill` or transformation note. Do not silently substitute a current rate for a historical date.

The [invoice-date exchange-rate workflow](https://fxpeek.com/en/answers/invoice-date-exchange-rate?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_indexing_authority&utm_content=invoice_date_code_example) explains why the governing policy and transaction event date must be chosen before the reference-data lookup. The example records the lookup evidence only; it does not choose an accounting or tax policy.

For an annual example, the EUR/USD 2024 page exposes the daily series, monthly averages, yearly high/low, CSV export, and the source limitations on one stable canonical URL.

## Notes

FXpeek provides reference rates for lookup and reporting workflows. These are not trading quotes. For tax, accounting, settlement, or regulated financial use, validate the source and licensing requirements first.

## License

MIT. See `LICENSE`.
