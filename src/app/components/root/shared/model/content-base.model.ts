import { BaseModel } from '../../../../shared/model/base.model';

export class ContentBaseModel extends BaseModel {
  public content: string;
  public pageNoteId: number | undefined;

  constructor(content: string = '') {
    super();
    this.content = content;
  }
}
