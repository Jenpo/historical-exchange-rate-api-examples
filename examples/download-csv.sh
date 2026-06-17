#!/usr/bin/env bash
set -euo pipefail

curl -L 'https://fxpeek.com/api/csv?from=CNY&to=TRY&days=365' \
  -o cny-try-history.csv

echo "Saved cny-try-history.csv"

