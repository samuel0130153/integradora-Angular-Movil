import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.senses_movil.app',
  appName: 'sensesmovil',
  webDir: 'dist/sensesmovil',
  bundledWebRuntime: false,
  server: {
    hostname: 'com.senses_movil.app',
    androidScheme: 'https',
  }
};

export default config;
