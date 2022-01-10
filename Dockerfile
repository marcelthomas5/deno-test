FROM denoland/deno

ENTRYPOINT  ["/bin/bash", "-c", "deno run --allow-net --allow-env --no-check $SOURCE"]
