# Автонастройка

1. Положи google-services.json и GoogleService-Info.plist в shared/notifications/config
2. Укажи настройки в app.json

```json
{
    "expo": {
        "ios": {
            "infoPlist": {
                "CFBundleLocalizations": ["ru", "en"],
                "UIBackgroundModes": ["remote-notification"],
                "ITSAppUsesNonExemptEncryption": false
            },
            "entitlements": {
                "aps-environment": "production"
            },
            "bundleIdentifier": "com.app.name",
            "buildNumber": "1",
            "googleServicesFile": "ROUTE_TO_FILE",
            "usesBroadcastPushNotifications": true,
            "appleTeamId": "TEAM_ID"
        },
        "android": {
            "package": "com.anonymous.app",
            "versionCode": 1,
            "googleServicesFile": "ROUTE_TO_FILE",
            "permissions": ["android.permission.POST_NOTIFICATIONS"]
        },
        "plugins": [
            "@react-native-firebase/app",
            [
                "expo-build-properties",
                {
                    "ios": {
                        "useFrameworks": "static",
                        "buildReactNativeFromSource": true,
                        "podfileProperties": {
                            "use_modular_headers!": true
                        },
                        "modularHeaders": ["@react-native-firebase/app", "@react-native-firebase/messaging"]
                    }
                }
            ]
        ]
    }
}
```

3. Готово (для Expo Go закомментируй инициализацию хука в `app\(tabs)\_layout.tsx`)

# Ручная настройка

## Android

Скачай google-services.json из Firebase → положи в android/app/

В android/build.gradle:

```buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.3.15' // последняя версия
    }
}
```

В android/app/build.gradle:

`apply plugin: 'com.google.gms.google-services'`

AndroidManifest.xml:

<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>

## iOS

Скачай GoogleService-Info.plist
Положи в:

`ios/YourApp/GoogleService-Info.plist`

Xcode: Capabilities
Включи Push Notifications
Включи Background Modes → Remote Notifications

4.2 AppDelegate (ПРОВЕРЬ)

ios/YourApp/AppDelegate.mm

#import <Firebase.h>

- (BOOL)application:(UIApplication _)application
  didFinishLaunchingWithOptions:(NSDictionary _)launchOptions
  {
  if ([FIRApp defaultApp] == nil) {
  [FIRApp configure];
  }

    return [super application:application didFinishLaunchingWithOptions:launchOptions];
    }

(Должен быть импорт)

```

https://rnfirebase.io/messaging/usage/ios-setup
```
