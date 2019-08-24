export interface ContextMenuOptions {
    name: string;
    /**
     * 1 - link
     * 2 - function
     */
    type: number;
    link: string;
    action: Function;
}