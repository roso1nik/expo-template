import { useEffect, useMemo, useRef, useState } from "react";

export type DebouncedCallback<Params extends unknown[]> = ((
    ...args: Params
) => void) & {
    cancel: () => void;
};

/**
 * @name useDebounceCallback
 * @description - Hook that creates a debounced callback
 * @category Utilities
 * @usage high
 *
 * @template Params The type of the params
 * @template Return The type of the return
 * @param {(...args: Params) => Return} callback The callback function
 * @param {number} delay The delay in milliseconds
 * @returns {(...args: Params) => Return} The callback with debounce
 *
 * @example
 * const debouncedCallback = useDebounceCallback(() => console.log('callback'), 500);
 */
export const useDebounceCallback = <Params extends unknown[], Return>(
    callback: (...args: Params) => Return,
    delay: number
): DebouncedCallback<Params> => {
    const internalCallbackRef = useRef(callback);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const delayRef = useRef(delay);

    internalCallbackRef.current = callback;
    delayRef.current = delay;

    const debounced = useMemo(() => {
        const cancel = () => {
            if (!timerRef.current) return;
            clearTimeout(timerRef.current);
            timerRef.current = null;
        };

        const debouncedCallback = function (this: any, ...args: Params) {
            cancel();
            timerRef.current = setTimeout(() => {
                internalCallbackRef.current.apply(this, args);
            }, delayRef.current);
        };

        debouncedCallback.cancel = cancel;

        return debouncedCallback;
    }, []);

    return debounced;
};

/**
 * @name useDebounceValue
 * @description - Hook that creates a debounced value
 * @category Utilities
 * @usage high

 * @template Value The type of the value
 * @param {Value} value The value to be debounced
 * @param {number} delay The delay in milliseconds
 * @returns {Value} The debounced value
 *
 * @example
 * const debouncedValue = useDebounceValue(value, 500);
 */
export const useDebounceValue = <Value>(value: Value, delay: number) => {
    const previousValueRef = useRef(value);
    const [debouncedValue, setDebounceValue] = useState(value);

    const debouncedSetState = useDebounceCallback(setDebounceValue, delay);

    useEffect(() => {
        if (previousValueRef.current === value) return;
        debouncedSetState(value);
        previousValueRef.current = value;
    }, [value]);

    return debouncedValue;
};
