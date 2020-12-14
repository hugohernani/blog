import { IMarkdownRenderer } from './markdown-renderer.interface';

export interface IMarkdownImage extends IMarkdownRenderer {
  src: string;
  alt: string;
}
