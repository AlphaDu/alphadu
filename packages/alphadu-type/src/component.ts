import {CSSProperties} from "react";
import {WithContainer, WithContainers} from "./rc";

declare namespace Type$Component {
    export interface Valuable<T, RT=T> {
        value: T,
        onChange(v: RT): void
    }

    export interface ComponentBase {
        style?: CSSProperties,
        className?: string
    }

    export interface TableRow<R> extends WithContainers<{
        row: R
    }>{

    }

    export interface TableCell {

    }

}
export = Type$Component;



