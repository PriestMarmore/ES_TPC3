# QRBioApp

A React Native mobile app for student attendance tracking via QR code scanning.

## Prerequisites

- Node.js >= 22.11.0
- npm

## Installation

```bash
npm install
```

## Running the App

```bash
# Android
npm run android

# iOS
npm run ios
```

## Running the Tests

```bash
npm test
```

This will run both the unit test and the 4 acceptance tests covering the full user journey:
1. Home screen renders correctly
2. Scan button navigates to the scan screen
3. Simulating a QR scan shows the confirmation modal
4. Closing the modal returns to the home screen

To clear the Jest cache if you run into issues:

```bash
npm test -- --clearCache
```