import { apiClient } from "@/shared/api";
import { ApiQueryKeys } from "@/shared/config";
import { useMutation } from "@tanstack/react-query";
import { PushNotificationType } from "../model/push-notification";

interface UseAddFirebaseTokenRequest {
    token: string;
    platform: PushNotificationType;
}

export const addFirebaseToken = async (data: UseAddFirebaseTokenRequest) => {
    const res = await apiClient.post("/notifications/firebase-token", data);

    return res;
};

export const useAddFirebaseTokens = () => {
    return useMutation({
        mutationKey: [ApiQueryKeys.ADD_FIREBASE_TOKEN],
        mutationFn: addFirebaseToken,
        // onSuccess: (_, context) => {
        //     Alert.alert("FCM Token", context.platform + context.token);
        // },
        // onError: (error) => {
        //     console.error("Add Firebase Token Error:", error);
        // },
    });
};
