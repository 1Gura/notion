import { BaseModel } from '../../../../shared/model/base.model';
import { TypeElementEnum } from '../notion-element/shared/type-element.enum';

export class ContentBaseModel extends BaseModel {
  public content: string;
  public pageNoteId: number | undefined;
  public type: TypeElementEnum = TypeElementEnum.TextField;

  constructor(
    content: string = '',
    type: TypeElementEnum = TypeElementEnum.TextField) {
    super();
    this.content = content;
    this.type = type;
  }
}
