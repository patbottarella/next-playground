/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    urlImports: ['https://cdn.skypack.dev'],
  }
}