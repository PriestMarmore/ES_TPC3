import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

describe('Acceptance Test: Student QR Scan Scenario', () => {
  test('The App should contain the Home Screen and the Scan Button', async () => {
    let testRenderer: any;

    // We wrap creation in 'act' and 'await' it to ensure 
    // the environment doesn't tear down too early.
    await ReactTestRenderer.act(async () => {
      testRenderer = ReactTestRenderer.create(<App />);
    });

    const testInstance = testRenderer.root;

    // 1. Verify Home Screen exists
    const homeScreen = testInstance.findByProps({ testID: 'home_screen' });
    expect(homeScreen).toBeTruthy();

    // 2. Verify the Welcome message exists
    // Using a more flexible finder in case of styling/nesting
    const welcomeText = testInstance.findAllByProps({ children: 'Welcome, Pedro' });
    expect(welcomeText.length).toBeGreaterThan(0);

    // 3. Verify the Scan Button exists
    const scanBtn = testInstance.findByProps({ testID: 'scan_qr_button' });
    expect(scanBtn).toBeTruthy();

    console.log('Acceptance Criteria Met: Dashboard logic verified.');
  });
});