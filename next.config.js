const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to', // Corrected hostname
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'uploads.s3.amazonaws.com', // Adding S3 if used
        pathname: '**',
      },
    ],
  },
};
