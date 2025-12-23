import {
    QueryClient,
    QueryClientProvider,
    keepPreviousData,
} from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import { DevToolsBubble } from "react-native-react-query-devtools";

const createOptimizedQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retryDelay: (attemptIndex) =>
                    Math.min(1000 * 2 ** attemptIndex, 30000),
                placeholderData: keepPreviousData,
                refetchOnWindowFocus: true,
                refetchOnReconnect: "always",
                networkMode: "online",
            },
        },
    });

export function QueryProvider({ children }: PropsWithChildren) {
    const [queryClient] = useState(() => createOptimizedQueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {process.env.NODE_ENV === 'development' && <DevToolsBubble queryClient={queryClient} />}
        </QueryClientProvider>
    );
}
