# Payload on a GCP VM

Single `e2-small` VM (2 vCPU, 2 GB, 20 GB disk) in `sup-internal-apps`, default network,
tags `http-server,https-server`. Postgres, Payload and Caddy (auto HTTPS) run from
`docker-compose.yml` here; the image is built on the VM with a 4 GB swap file.

`.env` at the repo root on the VM:

```
DOMAIN=<static-ip-with-dashes>.sslip.io
DB_PASSWORD=...
POSTGRES_URL=postgres://payload:<DB_PASSWORD>@127.0.0.1:5432/payload
PAYLOAD_SECRET=...            # same as before, so existing logins keep working
NEXT_PUBLIC_SERVER_URL=https://<DOMAIN>
CRON_SECRET=...
PREVIEW_SECRET=...
```

Deploy a new version (runs migrations, then builds):

```bash
cd ~/payload && git pull
sudo docker build --network host -t payload-cms .
sudo docker compose -f deploy/vm/docker-compose.yml --env-file .env up -d
```
