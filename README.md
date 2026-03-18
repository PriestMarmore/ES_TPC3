# QRBioApp - Presence Registration System

This project is a React Native mobile application designed for the **Software Engineering (ES)** course (TPC3). It allows students to manage their attendance and register presence via QR Code scanning.

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **npm** or **yarn**

### Installation
1. Clone the repository or extract the ZIP file.
2. Navigate to the project folder:
   ```bash
   cd QRBioApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🧪 Testing Suite
The project implements a **Testing Pyramid** strategy to ensure code reliability and functional requirements.

### Running Tests
To execute the full test suite (Unit + Acceptance), run:
```bash
npm test
```

### Test Descriptions
* **Unit Tests (`App.test.tsx`)**: Verifies that the core `App` component mounts correctly without errors.
* **Acceptance Tests (`Acceptance.test.tsx`)**: Validates the User Story "Student Dashboard to QR Scanner." It ensures the `home_screen` is accessible and the "SCAN QR CODE" button is functional.

> **Note on Environment:** The tests use `react-test-renderer` wrapped in asynchronous `act` blocks. This ensures stable execution across different CI/CD and Linux environments by synchronizing the React lifecycle during assertions.

---

### 🛠 Tools Used
* **Framework:** React Native
* **Language:** TypeScript / JavaScript
* **Testing Engine:** Jest
* **Renderer:** React Test Renderer (for environment-agnostic snapshots and tree traversal)
* **Help:** Google Gemini