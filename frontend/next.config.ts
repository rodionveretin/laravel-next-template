import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 sassOptions: {
  implementation: 'sass-embedded',
  additionalData:
   '@import "public/sass/base/mixins.scss"; @import "public/sass/base/variables.scss"; @import "public/sass/base/null.scss";',
 },
};

export default nextConfig;
