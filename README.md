# Deno Test

## Run
```
c && deno run --allow-net --allow-env main.ts
pm2 start main.ts --interpreter="deno" --interpreter-args="run --allow-net --allow-env=PORT --v8-flags=--max-old-space-size=512"
```
