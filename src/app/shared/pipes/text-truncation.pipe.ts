import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncation'
})
export class TextTruncationPipe implements PipeTransform {

  transform(value: string, countSymbols: number = 20): string {
    debugger
    return `${value.length < countSymbols ? value : value.slice(0, countSymbols - 1) + '...'}`;
  }

}
