# Publishing Checklist

Suggested repo name:

`historical-exchange-rate-api-examples`

Suggested description:

`Small JavaScript, Python, and CSV examples for fetching historical exchange rates.`

Suggested topics:

- exchange-rates
- currency
- api
- csv
- javascript
- python
- spreadsheets

## Before Publishing

1. Create a public GitHub repository.
2. Add every file in this folder.
3. Keep `README.md` as the repository homepage.
4. Confirm the API docs URL contains:

```text
utm_source=github&utm_medium=repo&utm_campaign=fxpeek_wave1_api_csv&utm_content=historical_fx_examples
```

5. Confirm the examples use supported data-backed pairs.
6. Run the offsite readiness check:

```bash
cd /Users/zhanbo/Documents/Codex/2026-06-03/new-chat-2/网站小站-fxpeek-goal/ratefy
npm run offsite:check
```

## One-command Publish

After GitHub CLI login is valid:

```bash
cd /Users/zhanbo/Documents/Codex/2026-06-03/new-chat-2/网站小站-fxpeek-goal/ratefy
npm run offsite:publish-github-repo
```

Optional overrides:

```bash
FXPEEK_GITHUB_OWNER=<github-owner> \
FXPEEK_GITHUB_REPO_NAME=historical-exchange-rate-api-examples \
npm run offsite:publish-github-repo
```

If it says auth is invalid, run:

```bash
gh auth login -h github.com
```

## After Publishing

Update:

`../../publication-tracker.csv`

Use:

```bash
cd /Users/zhanbo/Documents/Codex/2026-06-03/new-chat-2/网站小站-fxpeek-goal/ratefy
npm run offsite:mark-published -- \
  --asset "Historical FX examples repo" \
  --url "https://github.com/<github-owner>/historical-exchange-rate-api-examples" \
  --notes "Created historical-exchange-rate-api-examples repo"
```

This updates both `publication-tracker.csv` and `wave-1-publishing-queue.csv`.

Then run:

```bash
cd /Users/zhanbo/Documents/Codex/2026-06-03/new-chat-2/网站小站-fxpeek-goal/ratefy
npm run offsite:report
```

## Review Signals

Check after 7 days:

- GitHub repo indexed by Google.
- Any referral clicks to `/en/api`.
- Any `github / repo / historical_fx_examples` landing visitors.
- Any API or CSV visitors in `Offsite To API Conversion`.
