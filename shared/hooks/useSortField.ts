import { useCallback, useState } from "react";
import { SortOptions } from "../types";

export const useSort = (defaultSort?: SortOptions) => {
    const [sort, setSort] = useState<SortOptions>(defaultSort ?? undefined);

    const toggleSort = useCallback(() => {
        setSort((prev) => (prev === "ASC" ? "DESC" : "ASC"));
    }, []);

    const resetSort = useCallback(() => {
        setSort(undefined);
    }, []);

    const setSortDirectly = useCallback((direction: SortOptions) => {
        setSort(direction);
    }, []);

    return { sort, setSort, toggleSort, resetSort, setSortDirectly };
};
