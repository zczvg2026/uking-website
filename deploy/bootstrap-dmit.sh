#!/usr/bin/env bash
set -euo pipefail

release_sha="${1:?usage: bootstrap-dmit.sh GIT_COMMIT_SHA}"
node_version="24.18.0"
node_name="node-v${node_version}-linux-x64"
node_dir="/opt/${node_name}"
node_archive="/tmp/${node_name}.tar.gz"
node_shasums="/tmp/node-v${node_version}-SHASUMS256.txt"
repository="https://github.com/zczvg2026/uking-website.git"
release_dir="/srv/uking/releases/${release_sha}"

if [[ ! -x "${node_dir}/bin/node" ]]; then
  curl --fail --silent --show-error --location \
    "https://nodejs.org/dist/v${node_version}/${node_name}.tar.gz" \
    --output "${node_archive}"
  curl --fail --silent --show-error --location \
    "https://nodejs.org/dist/v${node_version}/SHASUMS256.txt" \
    --output "${node_shasums}"
  (
    cd /tmp
    grep " ${node_name}.tar.gz$" "${node_shasums}" | sha256sum --check -
  )
  install -d -m 0755 /opt
  tar -C /opt -xzf "${node_archive}"
fi

if ! id -u uking >/dev/null 2>&1; then
  useradd \
    --system \
    --create-home \
    --home-dir /srv/uking \
    --shell /usr/sbin/nologin \
    uking
fi

install -d -m 0755 -o uking -g uking /srv/uking/releases

if [[ ! -d "${release_dir}/.git" ]]; then
  runuser -u uking -- git clone \
    --depth 1 \
    --branch main \
    "${repository}" \
    "${release_dir}"
fi

actual_sha="$(runuser -u uking -- git -C "${release_dir}" rev-parse HEAD)"
if [[ "${actual_sha}" != "${release_sha}" ]]; then
  echo "Expected ${release_sha}, got ${actual_sha}" >&2
  exit 1
fi

runuser -u uking -- env \
  HOME=/srv/uking \
  PATH="${node_dir}/bin:/usr/bin:/bin" \
  "${node_dir}/bin/npm" ci \
  --prefix "${release_dir}" \
  --no-audit \
  --no-fund

runuser -u uking -- env \
  HOME=/srv/uking \
  PATH="${node_dir}/bin:/usr/bin:/bin" \
  "${node_dir}/bin/npm" run build \
  --prefix "${release_dir}"

ln -sfn "${release_dir}" /srv/uking/current
chown -h uking:uking /srv/uking/current

install -m 0644 \
  "${release_dir}/deploy/uking-www.service" \
  /etc/systemd/system/uking-www.service

systemctl daemon-reload
systemctl enable --now uking-www.service

for attempt in {1..20}; do
  if curl --fail --silent --show-error http://127.0.0.1:3100/ \
    | grep --quiet "域擎 UKing"; then
    break
  fi

  if [[ "${attempt}" -eq 20 ]]; then
    systemctl status uking-www.service --no-pager
    exit 1
  fi

  sleep 1
done

systemctl is-active --quiet uking-www.service
curl --fail --silent --show-error http://127.0.0.1:3100/ \
  | grep --quiet "170 0117 1717"

echo "UKing website is running at http://127.0.0.1:3100"
