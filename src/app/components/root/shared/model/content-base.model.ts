import { BaseModel } from '../../../../shared/model/base.model';
import { TypeElementEnum } from '../notion-element/shared/type-element.enum';

export class ContentBaseModel extends BaseModel {
  public content: string;
  public pageNoteId: number | undefined;
  public type: TypeElementEnum = TypeElementEnum.BaseTextField;

  constructor(
    content: string = '',
    type: TypeElementEnum = TypeElementEnum.BaseTextField) {
    super();
    this.content = content;
    this.type = type;
  }
}
