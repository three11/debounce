export declare const debounce: <T extends (...args: unknown[]) => void>(callback: T, wait?: number, immediate?: boolean) => <C>(this: C, ...args: Parameters<T>) => void;
export default debounce;
