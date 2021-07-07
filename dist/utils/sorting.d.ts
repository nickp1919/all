declare const sorting: ({ array, variant, properties, type, }: {
    array: Array<any>;
    variant?: string | undefined;
    properties?: string | undefined;
    type?: string | undefined;
}) => any[];
export default sorting;
