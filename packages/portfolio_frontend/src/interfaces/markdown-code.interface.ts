import { IMarkdownRenderer } from './markdown-renderer.interface';

export interface IMarkdownCode extends IMarkdownRenderer {
  language: string;
}
