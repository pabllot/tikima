/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.metroworldnews.com.br', 
      'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
