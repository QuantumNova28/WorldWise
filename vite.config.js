// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), eslint()],
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // Show warnings for ESLint
      emitError: false, // Do not treat as errors
    }),
  ],
});
