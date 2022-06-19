import { ContentBaseModel } from './content-base.model';
import { PageNoteShortModel } from './page-note-short.model';

export class PageNoteModel extends PageNoteShortModel {
  public content: ContentBaseModel[] = [];
  public userId: string = '';
}
