import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { ILoremText } from 'src/app/core/interfaces/lorem-text.interface';
import { RandomLoremTextService } from 'src/app/core/services/random-lorem-text.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  randomText!: ILoremText;
  constructor(private loremText: RandomLoremTextService) {}

  ngOnInit(): void {}

  onGetLoremText() {
    this.loremText
      .getLoremText$()
      .pipe(
        tap((response) => {
          this.randomText = response;
        }),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();
  }
}
