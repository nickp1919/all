declare type OptionType = {
    test?: string;
    survey?: string;
};
declare const getTestType: (TEST: any, status: string, option?: OptionType | undefined) => any;
export default getTestType;
