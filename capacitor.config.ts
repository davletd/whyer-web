import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.whyer.app',
  appName: 'Whyer - Learning Companion For Kids',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.10.139:3000',
    cleartext: true
  },
};

export default config;
