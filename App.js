import { StyleSheet } from 'react-native';
import AddReminder from './AddReminder';
import ReminderSent from './ReminderSent';
import AppFlow from "./AppFlow";
import SupplierAddDetailScreen from './src/screens/supplier-screens/SupplierAddProduct';

export default function App() {
  return (
    <>
    <SupplierAddDetailScreen/>
      {/* <AppFlow /> */}
      {/* <AddReminder/> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   screenTitle: {
//     paddingTop: 20,
//     paddingBottom: 20,
//     fontSize: 24,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
// });
