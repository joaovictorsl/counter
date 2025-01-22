import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function HomeScreen() {
    const [counter, setCounter] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: "white", fontSize: 36 }}>
                Counter: {counter}
            </Text>
            <Button
                title="Increment"
                onPress={() => setCounter((prev) => prev + 1)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
