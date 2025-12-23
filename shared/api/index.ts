import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BACKEND_BASE_URL, GLOBAL_DICTIONARY, STORAGE_KEYS } from "../config";

export const apiClient = axios.create({
    baseURL: BACKEND_BASE_URL,
});

apiClient.interceptors.request.use(
    async (config) => {
        if (typeof window !== "undefined") {
            const accessToken = await AsyncStorage.getItem(
                GLOBAL_DICTIONARY.ACCESS_TOKEN
            );
            if (accessToken) {
                config.headers["Authorization"] = `Bearer ${accessToken}`;
            }

            const language = await AsyncStorage.getItem(STORAGE_KEYS.LANGUAGE);

            if (language && config.url) {
                const separator = config.url.includes("?") ? "&" : "?";
                config.url = `${
                    config.url
                }${separator}lang=${encodeURIComponent(language)}`;
            }

            return config;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

let refreshTokenAttempts = 0;

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (typeof window !== "undefined") {
            if (error.response?.status === 401 && !originalRequest._retry) {
                if (refreshTokenAttempts >= 3) {
                    return Promise.reject(error);
                }

                originalRequest._retry = true;
                refreshTokenAttempts += 1;

                try {
                    const refreshTokenLocal = await AsyncStorage.getItem(
                        GLOBAL_DICTIONARY.REFRESH_TOKEN
                    );

                    if (!refreshTokenLocal) {
                        return Promise.reject(error);
                    }

                    // const { accessToken, refreshToken } = (
                    //     await refresh({ refreshToken: refreshTokenLocal })
                    // ).data;

                    // await AsyncStorage.setItem(
                    //     GLOBAL_DICTIONARY.ACCESS_TOKEN,
                    //     accessToken
                    // );
                    // await AsyncStorage.setItem(
                    //     GLOBAL_DICTIONARY.REFRESH_TOKEN,
                    //     refreshToken
                    // );

                    refreshTokenAttempts = 0;

                    // apiClient.defaults.headers.common[
                    //     "Authorization"
                    // ] = `Bearer ${accessToken}`;
                    // originalRequest.headers[
                    //     "Authorization"
                    // ] = `Bearer ${accessToken}`;

                    return apiClient(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);
