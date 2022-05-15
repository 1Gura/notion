import { BaseModel } from '../../../../shared/model/base.model';

export class PageNoteModel extends BaseModel {
  public title: string = '';
  public content: string = '';
  public userId: string = '';
}
