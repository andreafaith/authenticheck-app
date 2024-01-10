import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

const UploadAudioScreen = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [indicatorColor, setIndicatorColor] = useState(null);

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return { category: 'Underweight', color: '#FF6347' };
    } else if (bmi >= 18.5 && bmi < 25) {
      return { category: 'Normal', color: '#32CD32' };
    } else if (bmi >= 25 && bmi < 30) {
      return { category: 'Overweight', color: '#FFA500' };
    } else {
      return { category: 'Obese', color: '#FF0000' };
    }
  };

  const calculateBMI = () => {
    // Check if weight and height are valid numbers
    if (isNaN(parseFloat(weight)) || isNaN(parseFloat(height)) || weight <= 0 || height <= 0) {
      setResult("Please enter valid weight and height");
      return;
    }

    // Calculate BMI
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height) / 100; // Convert height to meters
    const bmi = weightInKg / (heightInCm * heightInCm);

    const { category, color } = getBMICategory(bmi);

    setResult(`Your BMI is: ${bmi.toFixed(2)}`);
    setIndicatorColor(color);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent}>
          <View style={styles.BMIContainer}>
            <Text style={styles.BMIGreet}>
              Calculate your BMI
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.fillOut}>
        <TextInput
          style={styles.input}
          placeholder="Enter weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter height (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <TouchableOpacity onPress={calculateBMI} style={styles.calculateButton}>
          <Text style={styles.calculateText}>Calculate BMI</Text>
        </TouchableOpacity>
        {result && (
          <View style={[styles.resultContainer, { backgroundColor: indicatorColor }]}>
            <Text style={styles.result}>{result}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: "0%",
  },
  frame: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  accent: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 450,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#0B3954",
  },
  BMIContainer: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BMIGreet:{
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  fillOut: {
    flex: 1,
    position: "absolute",
    top: "20%",
    bottom: "30%",
    left: "7%",
    right: "7%",
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  calculateButton: {
    backgroundColor: '#0B3954',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  calculateText: {
    color: 'white',
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UploadAudioScreen;
