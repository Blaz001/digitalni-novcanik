# Android app build

This branch contains a standalone Capacitor Android wrapper for Digitalni novčanik.

- The web app is bundled into the APK under `www/`.
- App data is stored in the Android app's own WebView storage, separate from Chrome's browser storage.
- Use the in-app JSON backup to export or restore the complete balance and transaction history.
- Clearing the Android app's own storage or uninstalling the app can still erase local data. Keep JSON backups outside the phone.

## Build

The GitHub Actions workflow **Build Android APK** builds a debug APK and uploads it as the artifact `digitalni-novcanik-debug-apk`.

To run manually: GitHub → Actions → Build Android APK → Run workflow → branch `capacitor-android-app`.
