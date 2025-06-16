## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

## Generate keystore

keytool -genkeypair -v -storetype PKCS12 -keystore release.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
C:\Users\ddoan\Project\mobile\Mes\release.keystore

## Check key alias

keytool -list -v -keystore path/to/release.keystore
