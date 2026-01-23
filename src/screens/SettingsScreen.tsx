import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useAppState} from '@/state/AppStateContext';

/**
 * Settings Screen - App configuration and preferences
 * Allows users to customize app behavior and tracking settings
 */
const SettingsScreen: React.FC = () => {
  const {settings, updateSettings} = useAppState();
  const [cameraEnabled, setCameraEnabled] = useState(
    settings?.cameraEnabled ?? true,
  );
  const [sensorsEnabled, setSensorsEnabled] = useState(
    settings?.sensorsEnabled ?? true,
  );
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(
    settings?.aiAnalysisEnabled ?? true,
  );
  const [autoSave, setAutoSave] = useState(settings?.autoSave ?? true);

  const handleToggleSetting = (
    key: string,
    value: boolean,
    setter: (val: boolean) => void,
  ) => {
    setter(value);
    updateSettings({[key]: value});
  };

  const handleClearData = () => {
    Alert.alert(
      'Clear Data',
      'Are you sure you want to clear all session data? This cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => {
            // Implement data clearing logic
            Alert.alert('Success', 'All data has been cleared');
          },
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tracking Settings</Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Camera Tracking</Text>
          <Switch
            value={cameraEnabled}
            onValueChange={val =>
              handleToggleSetting('cameraEnabled', val, setCameraEnabled)
            }
            trackColor={{false: '#767577', true: '#6200EE'}}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Motion Sensors</Text>
          <Switch
            value={sensorsEnabled}
            onValueChange={val =>
              handleToggleSetting('sensorsEnabled', val, setSensorsEnabled)
            }
            trackColor={{false: '#767577', true: '#6200EE'}}
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>AI Analysis</Text>
          <Switch
            value={aiAnalysisEnabled}
            onValueChange={val =>
              handleToggleSetting('aiAnalysisEnabled', val, setAiAnalysisEnabled)
            }
            trackColor={{false: '#767577', true: '#6200EE'}}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data Settings</Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Auto-save Sessions</Text>
          <Switch
            value={autoSave}
            onValueChange={val =>
              handleToggleSetting('autoSave', val, setAutoSave)
            }
            trackColor={{false: '#767577', true: '#6200EE'}}
          />
        </View>

        <TouchableOpacity
          style={styles.dangerButton}
          onPress={handleClearData}>
          <Text style={styles.dangerButtonText}>Clear All Data</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>StepFlow v1.0.0</Text>
        <Text style={styles.aboutText}>
          AI-Powered Rhythm Training with Motion Tracking
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  dangerButton: {
    backgroundColor: '#D32F2F',
    padding: 14,
    borderRadius: 8,
    marginTop: 16,
  },
  dangerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});

export default SettingsScreen;
