import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PageNoteModel } from '../model/page-note.model';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PageNoteService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'https://localhost:7151/api/PageNote');
  }

  public getPageNote(): Observable<PageNoteModel[]> {
    return this.get('')
      .pipe(map((data: PageNoteModel[]) => plainToClass(PageNoteModel, data)));
  }

  public createPageNote(pageNote: PageNoteModel): Observable<PageNoteModel> {
    return this.post('', pageNote);
  }
}
