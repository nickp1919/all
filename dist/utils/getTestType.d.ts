export declare type OptionType = {
    test?: string;
    survey?: string;
};
declare const getTestType: (status: string, option?: OptionType | undefined) => string;
export default getTestType;
