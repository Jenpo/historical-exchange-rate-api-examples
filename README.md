# Historical Exchange Rate API Examples

Small examples for fetching historical exchange rates as JSON or CSV.

Suggested repository description:

`Small JavaScript, Python, and CSV examples for fetching historical exchange rates.`

The examples use FXpeek because it has simple endpoints for:

- latest reference rates,
- historical daily series,
- CSV export for spreadsheets,
- pair pages that can be cited in reports.

API docs:

https://fxpeek.com/en/api?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_wave1_api_csv&utm_content=historical_fx_examples

Annual reference report:

- HTML: https://fxpeek.com/en/reports/2026-historical-fx-reference?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_wave1_api_csv&utm_content=annual_fx_report
- PDF: https://fxpeek.com/reports/2026-historical-fx-reference-report.pdf?utm_source=github&utm_medium=repo&utm_campaign=fxpeek_wave1_api_csv&utm_content=annual_fx_report_pdf

## Quick Start

Latest rate:

```bash
curl 'https://fxpeek.com/api/rates?from=CNY&to=TRY'
```

Historical JSON:

```bash
curl 'https://fxpeek.com/api/history?from=CNY&to=TRY&days=365'
```

CSV export:

```bash
curl -L 'https://fxpeek.com/api/csv?from=CNY&to=TRY&days=365' \
  -o cny-try-history.csv
```

## Examples

- `examples/fetch-history.js`: fetch historical JSON from Node.js.
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

## Citation And Reporting Workflow

For reports, dashboards, or spreadsheet notes, start with the annual FX reference report, then link the exact pair page or API endpoint used for the lookup. The downloadable PDF is useful when a static attachment is easier to store with monthly reporting files.

## Notes

FXpeek provides reference rates for lookup and reporting workflows. These are not trading quotes. For tax, accounting, settlement, or regulated financial use, validate the source and licensing requirements first.

## License

MIT. See `LICENSE`.
