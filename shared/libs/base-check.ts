import { Platform } from "react-native";

const isClient = () => {
    return (
        Platform.OS === "web" &&
        typeof window !== "undefined" &&
        typeof window.localStorage !== "undefined"
    );
};

const isMobile = () => {
    return Platform.OS !== "web";
};

export { isClient, isMobile };
