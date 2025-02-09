import { MoveableProps, MoveableState, MoveableInterface } from "react-moveable/declaration/types";
import { Component } from "preact";

export interface PreactMoveableInterface extends Component<MoveableProps, MoveableState>, MoveableInterface {
    isMoveableElement(target: HTMLElement | SVGElement): boolean;
    updateRect(isNotSetState?: boolean): void;
    updateTarget(): void;
    destroy(): void;
    dragStart(e: MouseEvent | TouchEvent): void;
    isInside(clientX: number, clientY: number): boolean;
}
