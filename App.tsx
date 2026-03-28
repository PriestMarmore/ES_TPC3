import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [showModal, setShowModal] = useState(false);

  const StatCard = ({ val, label, bg = '#fff' }: any) => (
      <View style={[styles.statCard, { backgroundColor: bg }]}>
        <Text style={styles.statVal}>{val}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
  );

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {/* --- STUDENT HOME SCREEN --- */}
        {currentScreen === 'home' && (
            <View style={styles.screen} testID="home_screen">
              <View style={styles.header}>
                <Text style={styles.headerText}>Welcome, Pedro 👋</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.sectionTitle}>Your Progress</Text>
                <View style={styles.statsGrid}>
                  <StatCard val="85%" label="Attendance" />
                  <StatCard val="12" label="Attended" />
                  <StatCard val="2" label="Missed" />
                  <StatCard val="On Track" label="Status" bg="#eef4ff" />
                </View>
              </View>

              <View style={styles.bottomNav}>
                <TouchableOpacity
                    style={styles.btnPrimary}
                    onPress={() => setCurrentScreen('scan')}
                    testID="scan_qr_button"
                >
                  <Text style={styles.btnText}>SCAN QR CODE</Text>
                </TouchableOpacity>
              </View>
            </View>
        )}

        {/* --- SCAN SCREEN --- */}
        {currentScreen === 'scan' && (
            <View style={styles.screen} testID="scan_screen">
              <View style={styles.header}>
                <TouchableOpacity onPress={() => setCurrentScreen('home')} style={styles.closeBtn}>
                  <Text style={styles.closeBtnText}>✕</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Scan Presence</Text>
              </View>

              <View style={styles.viewfinder}>
                {/* This mimics your viewfinder box */}
                <View style={styles.scanBox} />

                {/* Simulation Button for Testing */}
                <TouchableOpacity
                    style={styles.simulateButton}
                    onPress={() => setShowModal(true)}
                    testID="simulate_success_button"
                >
                  <Text style={{color: '#555'}}>Simulate Success</Text>
                </TouchableOpacity>
              </View>

              {/* SUCCESS MODAL */}
              <Modal transparent visible={showModal} animationType="fade">
                <View style={styles.modalOverlay}>
                  <View style={styles.modal} testID="profile_screen">
                    <Text style={styles.modalIcon}>✓</Text>
                    <Text style={styles.modalTitle}>Recorded!</Text>
                    <Text style={styles.modalBody}>Presence confirmed for Student: Pedro Moreira</Text>
                    <TouchableOpacity
                        style={styles.btnPrimary}
                        onPress={() => {setShowModal(false); setCurrentScreen('home');}}
                        testID="close_modal_button"
                    >
                      <Text style={styles.btnText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
        )}
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7F9' },
  screen: { flex: 1 },
  header: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerText: { fontWeight: 'bold', fontSize: 18, color: '#333' },
  content: { padding: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  statCard: {
    width: '48%',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05,
  },
  statVal: { fontSize: 22, fontWeight: 'bold', color: '#1A56A6' },
  statLabel: { fontSize: 12, color: '#666', marginTop: 4 },
  bottomNav: { marginTop: 'auto', padding: 25, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#eee' },
  btnPrimary: { backgroundColor: '#1A56A6', padding: 16, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  viewfinder: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  scanBox: { width: 220, height: 220, borderWidth: 2, borderColor: '#fff', borderRadius: 20 },
  closeBtn: { position: 'absolute', left: 20 },
  closeBtnText: { fontSize: 24, color: '#1A56A6' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  modal: { width: '80%', backgroundColor: '#fff', padding: 25, borderRadius: 20, alignItems: 'center' },
  modalIcon: { fontSize: 50, color: '#219653' },
  modalTitle: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  modalBody: { textAlign: 'center', color: '#666', marginBottom: 20 },
  simulateButton: { marginTop: 30, padding: 10, backgroundColor: '#eee', borderRadius: 8 }
});

export default App;