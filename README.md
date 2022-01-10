# Deno Test

## Run
```
c && deno run --allow-net --allow-env main.ts
docker run -it --init -p 8080:8080 --env DENO_DIR=./.deno_dir -v $PWD:/app -v $PWD/.deno_dir:/.deno_dir denoland/deno:latest run --allow-net --allow-env --no-check /app/main.ts
docker run -it --init -p 8080:8080 --env DENO_DIR=./.deno_dir -v $PWD/.deno_dir:/.deno_dir denoland/deno:latest run --allow-net --allow-env --no-check https://raw.githubusercontent.com/marcelthomas5/deno-test/main/main.ts

docker run -it --init -p 8080:8080 --env SOURCE=https://raw.githubusercontent.com/marcelthomas5/deno-test/main/main.ts --env DENO_DIR=./.deno_dir -v $PWD/.deno_dir:/.deno_dir nubodev/deno-test
```

```
LISTEN_ADDRESS=0.0.0.0:5555 pm2 start main.ts --interpreter="./deno" --interpreter-args="run --allow-net --allow-env=PORT --no-check --v8-flags=--max-old-space-size=512"
PORT=5501 LISTEN_ADDRESS=0.0.0.0:5501 pm2 start main.ts --name app1 --interpreter="../../bin/nubo-deno" --interpreter-args="run --allow-net --allow-env=PORT --no-check --v8-flags=--max-old-space-size=512"
PORT=5502 LISTEN_ADDRESS=0.0.0.0:5502 pm2 start main.ts --name app2 --interpreter="../../bin/nubo-deno" --interpreter-args="run --allow-net --allow-env=PORT --no-check --v8-flags=--max-old-space-size=512"
```

### Production test
```
PORT=3000 LISTEN_ADDRESS=0.0.0.0:3000 pm2 start main.ts --interpreter="../nubo-deno" --interpreter-args="run --allow-net --allow-env=PORT --no-check --v8-flags=--max-old-space-size=512"
LOCATION="Europe - London - eu-west-2" PORT=8000 LISTEN_ADDRESS=0.0.0.0:8000 pm2 start geo.ts --interpreter="../nubo-deno" --interpreter-args="run --allow-net --allow-env=PORT,LOCATION --no-check --v8-flags=--max-old-space-size=512"
```
