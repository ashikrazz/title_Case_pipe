import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');
    for (var index = 0; index < words.length; index++) {
      if (index > 0 && this.isPreposition(words[index]))
        words[index] = words[index].toLowerCase();
      else {
        words[index] = this.toTitleCase(words[index]);
      }
    }
    return words.join(' ');
  }
  private toTitleCase(word:string): string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }
  private isPreposition(word:string):boolean {
    let prepositions = [
      'aboard','about','above','according to',
      'across', 'after', 'against', 'ahead of',
      'along', 'along with', 'among', 'around',
      'as', 'as far as', 'as for', 'as well as',
      'aside from', 'at', 'because of', 'before',
      'behind', 'below', 'beneath', 'beside',
      'between', 'beyond', 'but', 'by',
      'close to', 'despite', 'down', 'due to',
      'during', 'except', 'except for', 'failing',
      'far from', 'following', 'for', 'from',
      'in', 'in addition to', 'in case of', 'in front of',
      'inside', 'into', 'like', 'minus',
      'near', 'next to', 'of', 'off',
      'on', 'on account of', 'on top of', 'onto',
      'opposite', 'out', 'out of', 'outside',
      'outside of', 'over', 'past', 'plus',
      'prior to', 'regarding', 'regardless of', 'since',
      'than', 'through', 'throughout', 'till',
      'to', 'toward', 'towards', 'underneath',
      'unlike', 'until', 'up', 'upon',
      'via', 'with', 'within', 'without','the'
    ];
    return prepositions.includes(word.toLowerCase());
  }
}
