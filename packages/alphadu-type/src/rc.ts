import {Container} from "./container";

export interface WithContainer<T=unknown> {
    container: Container<T>
}

export interface WithContainers<T extends Record<string, unknown>> {
    containers: T
}

export interface AddNamingContainer<N extends string, T=unknown> {
    containers:
}