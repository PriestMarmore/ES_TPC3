import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

describe('Acceptance Test: Student QR Scan Scenario', () => {

  test('1. The App should render the Home Screen with the correct content', async () => {
    let testRenderer: any;

    await ReactTestRenderer.act(async () => {
      testRenderer = ReactTestRenderer.create(<App />);
    });

    const testInstance = testRenderer.root;

    // Verify Home Screen exists
    const homeScreen = testInstance.findByProps({ testID: 'home_screen' });
    expect(homeScreen).toBeTruthy();

    // Verify the Welcome message exists - search all Text nodes for one containing 'Welcome, Pedro'
    const allTexts = testInstance.findAllByType('Text');
    const welcomeText = allTexts.find((node: any) =>
        typeof node.props.children === 'string' &&
        node.props.children.includes('Welcome, Pedro')
    );
    expect(welcomeText).toBeTruthy();

    // Verify the Scan Button exists
    const scanBtn = testInstance.findByProps({ testID: 'scan_qr_button' });
    expect(scanBtn).toBeTruthy();

    console.log('✓ Step 1 Passed: Home Screen is rendered correctly.');
  });

  test('2. Pressing the Scan Button should navigate to the Scan Screen', async () => {
    let testRenderer: any;

    await ReactTestRenderer.act(async () => {
      testRenderer = ReactTestRenderer.create(<App />);
    });

    const testInstance = testRenderer.root;

    // Find and press the Scan QR button
    const scanBtn = testInstance.findByProps({ testID: 'scan_qr_button' });
    await ReactTestRenderer.act(async () => {
      scanBtn.props.onPress();
    });

    // Verify the Scan Screen is now visible
    const scanScreen = testInstance.findByProps({ testID: 'scan_screen' });
    expect(scanScreen).toBeTruthy();

    // Verify the Home Screen is no longer visible
    const homeScreens = testInstance.findAllByProps({ testID: 'home_screen' });
    expect(homeScreens.length).toBe(0);

    console.log('✓ Step 2 Passed: Navigated to Scan Screen successfully.');
  });

  test('3. Simulating a successful QR scan should show the confirmation modal', async () => {
    let testRenderer: any;

    await ReactTestRenderer.act(async () => {
      testRenderer = ReactTestRenderer.create(<App />);
    });

    const testInstance = testRenderer.root;

    // Navigate to Scan Screen
    const scanBtn = testInstance.findByProps({ testID: 'scan_qr_button' });
    await ReactTestRenderer.act(async () => {
      scanBtn.props.onPress();
    });

    // Press the Simulate Success button (found by testID)
    const simulateBtn = testInstance.findByProps({ testID: 'simulate_success_button' });
    await ReactTestRenderer.act(async () => {
      simulateBtn.props.onPress();
    });

    // Verify the confirmation modal is now visible
    const modal = testInstance.findByProps({ testID: 'profile_screen' });
    expect(modal).toBeTruthy();

    // Verify the confirmation message content
    const allTexts = testInstance.findAllByType('Text');
    const confirmationText = allTexts.find((node: any) =>
        typeof node.props.children === 'string' &&
        node.props.children.includes('Pedro Moreira')
    );
    expect(confirmationText).toBeTruthy();

    console.log('✓ Step 3 Passed: Confirmation modal shown after successful QR scan simulation.');
  });

  test('4. Closing the confirmation modal should return to the Home Screen', async () => {
    let testRenderer: any;

    await ReactTestRenderer.act(async () => {
      testRenderer = ReactTestRenderer.create(<App />);
    });

    const testInstance = testRenderer.root;

    // Navigate to Scan Screen
    const scanBtn = testInstance.findByProps({ testID: 'scan_qr_button' });
    await ReactTestRenderer.act(async () => {
      scanBtn.props.onPress();
    });

    // Simulate a successful scan
    const simulateBtn = testInstance.findByProps({ testID: 'simulate_success_button' });
    await ReactTestRenderer.act(async () => {
      simulateBtn.props.onPress();
    });

    // Close the modal
    const closeBtn = testInstance.findByProps({ testID: 'close_modal_button' });
    await ReactTestRenderer.act(async () => {
      closeBtn.props.onPress();
    });

    // Verify we are back on the Home Screen
    const homeScreen = testInstance.findByProps({ testID: 'home_screen' });
    expect(homeScreen).toBeTruthy();

    console.log('✓ Step 4 Passed: Returned to Home Screen after closing modal.');
  });

});