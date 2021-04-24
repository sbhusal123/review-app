import React from "react";

import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Modal,
    StyleSheet
} from "react-native";
import Card from "../shared/card";

import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
    // Review Datas
    const [reviews, setReviews] = React.useState([
        {
            title: "Rock The Star",
            rating: 5,
            body: "Lorem Ipsim Dolor",
            key: 1
        },
        {
            title: "Nerves Of Steel",
            rating: 3,
            body: "Lorem Ipsim Dolor Nerves",
            key: 2
        }
    ]);

    const [modalOpen, setModalOpen] = React.useState(false);

    return (
        <View style={globalStyles.container}>
            {/* Modal */}
            <Modal
                visible={modalOpen}
                animationType="slide"
                style={styles.modalContent}
            >
                <View>
                    <MaterialIcons
                        name="close"
                        size={24}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>Hello from modal</Text>
                </View>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("ReviewDetails", { ...item })
                        }
                    >
                        <Card>
                            <Text style={globalStyles.titleText} key={item.key}>
                                {item.title}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#444",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center"
    },
    modalClose: {
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1
    },
    modalContent: {
        flex: 1
    }
});
