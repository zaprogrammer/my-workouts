import {StyleSheet as styles} from "react-native";
import Colors from "./colors";

export const appStyles = styles.create({
    scrollView: {
        backgroundColor: Colors.primary
    },
    safeArea: {
        flex: 1
    },
});
