export declare type ButtonObjType = {
    [key: string]: {
        name: string;
        url: string | undefined;
        count?: number;
        childrens?: any;
    };
};
export declare type TabsUrlPropsType = {
    disabled?: boolean;
    location: Location;
    buttons: any;
    start: string;
    count?: number;
    children?: any;
    newLocation?: string;
    NAVIGATE: {
        mainUrl: string;
    };
};
