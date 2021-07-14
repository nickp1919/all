export declare type TLoaderProps = {
    onReady: (result: string | null) => void;
    onLoadStart?: () => void;
    onError?: (error: Error) => void;
};
export default function CSImageLoad(src: string, options: TLoaderProps): Promise<void>;
