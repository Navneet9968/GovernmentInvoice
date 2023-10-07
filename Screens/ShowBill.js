import { StyleSheet, Image, TouchableOpacity,Button, StatusBar } from 'react-native';
import * as Print from 'expo-print';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import {PdfCode} from "../Component/PdfCode";
import { shareAsync } from 'expo-sharing';
import * as React from 'react';
import dateFormat, { masks } from "dateformat";
import { useState } from "react";


const Home = ({ navigation }) => {
  const [name, set_Name] = useState("");
  const [Address, Set_Address] = useState("");
  const [Mobile_No, Set_Mobile_No] = useState("");
  const [Quantity, setQuantity] = useState("");
  const now = new Date();
  const [Invoice, setInvoice] = useState(dateFormat(now, "ddmmyyhhMss"));
  const [Product, Set_Product] = useState("product1");
  const [Total, setTotal] = useState("");
  const [ReceivedBalance, SetReceivedBalance] = useState("");
  const [PaymentType, setPaymentType] = useState("Credit");
  const [RemaningBalance, setRemaningBalance] = useState("Paid");
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const items = [
    {
      name: "Rohan",
      Address: "Dwarka",
      Mobile_No: "8199943367",
      Quantity: "2",
      Invoice: "02032306423",
      Product: "Product1",
      Total: "8100",
      ReceivedBalance: "6000",
      PaymentType: "Cash",
      RemainingBalance: "2100",
      selectedPrinter: "Epson",
    },
    {
      name: "John Doe",
      Address: "123 Main St",
      Mobile_No: "555-1234",
      Quantity: "3",
      Invoice: "04042307654",
      Product: "Product2",
      Total: "5500",
      ReceivedBalance: "4000",
      PaymentType: "Credit Card",
      RemainingBalance: "1500",
      selectedPrinter: "HP",
    },
    {
      name: "Alice Smith",
      Address: "456 Elm St",
      Mobile_No: "555-5678",
      Quantity: "1",
      Invoice: "06052308276",
      Product: "Product3",
      Total: "2500",
      ReceivedBalance: "2000",
      PaymentType: "Debit Card",
      RemainingBalance: "500",
      selectedPrinter: "Canon",
    },
    {
      name: "Bob Johnson",
      Address: "789 Oak St",
      Mobile_No: "555-9876",
      Quantity: "4",
      Invoice: "08062309432",
      Product: "Product4",
      Total: "9500",
      ReceivedBalance: "8000",
      PaymentType: "PayPal",
      RemainingBalance: "1500",
      selectedPrinter: "Brother",
    },
  ];

  // You can add more random data or modify the existing data as needed.

//   const print = async () => {
//     // On iOS/android prints the given html. On web prints the HTML from the current page.
//     await Print.printAsync({
//       html,
//       printerUrl: selectedPrinter?.url, // iOS only
//     });
//   };

//   const printToFile = async () => {
//     let html = PdfCode(
//       name,
//       Address,
//       Mobile_No,
//       Quantity,
//       Invoice,
//       Product,
//       Total,
//       ReceivedBalance,
//       PaymentType,
//       RemaningBalance
//     );
//     // On iOS/android prints the given html. On web prints the HTML from the current page.
//     try {
//       const { uri } = await Print.printToFileAsync({
//         html,
//       });
//       console.log("File has been saved to:", uri);
//       await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
//     } catch (err) {
//       Alert.alert(
//         "Make shure You have Internet Connection or contact @+91 8530730017"
//       );
//     }
//   };

//   const selectPrinter = async () => {
//     const printer = await Print.selectPrinterAsync(); // iOS only
//     setSelectedPrinter(printer);
//   };

  return (
    <View style={styles.container}>
      <FlatList
       style={{"width":"100%"}}
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textst}>{item.name}</Text>
            <Text style={styles.textsm}>{item.Mobile_No}</Text>
            <Text style={styles.textsm}>{item.Product}</Text>
            <Text style={styles.textsm}>{item.Total}</Text>
            <View style={styles.CreateInvoiceButton}>
              <Button title="Share Invoice" />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.Invoice}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    textst: {
        fontSize:24,
        fontWeight:"bold",
    },
    textsm: {
        fontSize:20,
        fontWeight:"semibold",
    },
    item: {
        width:'100%',
        margin:8,
        padding:6,
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        backgroundImage: 'linear-gradient(to top right, #ffffff, #ffffff45)',
        
        borderRadius: 20,
        zIndex: 2,
    },
    CreateInvoiceButton : {
      marginTop: 12,
      marginLeft: 8,
      marginRight: 8,
      marginBottom : 12
    },
    container: {
        width:'100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo : {
      width : 100,
      height:100
    },
    button: {
      alignItems: "center",
      backgroundColor: "lightblue",
      padding: 10,
      borderRadius:4
    },
  });
 
export default Home;