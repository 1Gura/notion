import { BaseModel } from '../../../../shared/model/base.model';
import { ContentBaseModel } from './content-base.model';

export class PageNoteModel extends BaseModel {
  public title: string = '';
  public content: ContentBaseModel[] = [];
  public userId: string = '';
}
