/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErros: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.metroworldnews.com.br', 
      'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
