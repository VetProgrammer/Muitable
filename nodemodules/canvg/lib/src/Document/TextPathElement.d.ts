import { RenderingContext2D } from '../types';
import PathParser from '../PathParser';
import Document from './Document';
import TextElement from './TextElement';
import PathElement from './PathElement';
export interface IPoint {
    x: number;
    y: number;
}
export interface IPathCommand {
    command: string;
    points: number[];
    start?: IPoint;
    pathLength: number;
}
interface ICachedPoint extends IPoint {
    distance: number;
}
interface IGlyphInfo {
    transposeX: number;
    transposeY: number;
    text: string;
    rotation: number;
    p0: ICachedPoint;
    p1: ICachedPoint;
}
export default class TextPathElement extends TextElement {
    type: string;
    protected textWidth: number;
    protected textHeight: number;
    protected pathLength: number;
    protected glyphInfo: IGlyphInfo[];
    protected readonly text: string;
    protected readonly dataArray: IPathCommand[];
    private letterSpacingCache;
    private equidistantCache;
    private readonly measuresCache;
    constructor(document: Document, node: HTMLElement, captureTextNodes?: boolean);
    getText(): string;
    path(ctx: RenderingContext2D): void;
    renderChildren(ctx: RenderingContext2D): void;
    protected getLetterSpacingAt(idx?: number): number;
    protected findSegmentToFitChar(ctx: RenderingContext2D, anchor: string, textFullWidth: number, fullPathWidth: number, spacesNumber: number, inputOffset: number, c: string, charI: number): {
        offset: number;
        segment: {
            p0: ICachedPoint;
            p1: ICachedPoint;
        };
    };
    protected measureText(ctx: RenderingContext2D, text?: string): number;
    protected setTextData(ctx: RenderingContext2D): void;
    protected parsePathData(path: PathElement): IPathCommand[];
    protected pathM(pathParser: PathParser, points: number[]): string;
    protected pathL(pathParser: PathParser, points: number[]): string;
    protected pathH(pathParser: PathParser, points: number[]): string;
    protected pathV(pathParser: PathParser, points: number[]): string;
    protected pathC(pathParser: PathParser, points: number[]): void;
    protected pathS(pathParser: PathParser, points: number[]): string;
    protected pathQ(pathParser: PathParser, points: number[]): void;
    protected pathT(pathParser: PathParser, points: number[]): string;
    protected pathA(pathParser: PathParser): number[];
    protected calcLength(x: number, y: number, cmd: string, points: number[]): number;
    protected getPointOnLine(dist: number, P1x: number, P1y: number, P2x: number, P2y: number, fromX?: number, fromY?: number): IPoint;
    protected getPointOnPath(distance: number): IPoint;
    protected getLineLength(x1: number, y1: number, x2: number, y2: number): number;
    protected getPathLength(): number;
    protected getPointOnCubicBezier(pct: number, P1x: number, P1y: number, P2x: number, P2y: number, P3x: number, P3y: number, P4x: number, P4y: number): IPoint;
    protected getPointOnQuadraticBezier(pct: number, P1x: number, P1y: number, P2x: number, P2y: number, P3x: number, P3y: number): IPoint;
    protected getPointOnEllipticalArc(cx: number, cy: number, rx: number, ry: number, theta: number, psi: number): IPoint;
    protected buildEquidistantCache(inputStep: number, inputPrecision: number): void;
    protected getEquidistantPointOnPath(targetDistance: number, step?: number, precision?: number): ICachedPoint;
}
export {};
//# sourceMappingURL=TextPathElement.d.ts.map