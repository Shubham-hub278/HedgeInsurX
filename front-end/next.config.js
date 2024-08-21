/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RPC_URL:"https://polygon-mumbai.g.alchemy.com/v2/B4HZBW5VlKKuMvgYcgRMSEHPO_tFEwd1",
    RISK_POOL: "0x5f2E44190482aB9a523D538F65F1D7fFC4ce34e1",
  },
}

module.exports = nextConfig
