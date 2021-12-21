import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

const getByText = (container: HTMLElement, text: string) => {
  const element = Array.from(container.querySelectorAll('*'))
    .find(el => el.textContent === text);

  if (!element) {
    throw new Error(`Element with text "${text}" not found.`);
  }
  return element as HTMLElement
}

describe('Calculator', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  const testcases = [
    ['', '', 'display empty text by default'],
    ['123', '123', 'display number according to all digits that were pushed'],
    ['', '123C', 'display empty text after "C" clicked'],
    ['12+3', '12+3', 'don\'t evaluate before "equal" button pushed'],
    ['12+3+', '12+3++++', 'display at most one operator at the end even if more were pushed'],
    ['12+3/', '12+3+-*/', 'display the last operator, if more than one operator was pushed'],
    ['15', '12+3=', 'add two numbers according to user input'],
    ['9', '12-3=', 'subtract two numbers according to user input'],
    ['36', '12*3=', 'multiply two numbers according to user input'],
    ['4', '12/3=', 'divide two numbers according to user input'],
    ['2.5', '1+2*3/4=', 'perform sequence of computations according to user input'],
  ]
  for (const [expectedOutput, input, testName] of testcases){
    it(`should display "${expectedOutput}" for input "${input}" (${testName})`, () => {
      // given
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.nativeElement as HTMLElement;

      // when
      for (const char of input) {
        getByText(compiled, char).click();
      }
      fixture.detectChanges();

      // then
      const display = compiled.querySelector('.display')! as HTMLInputElement
      expect(display.value).toEqual(expectedOutput);
    })
  }
});
