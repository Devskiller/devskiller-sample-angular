import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

const getByText = (container: HTMLElement, text: string) => {
  const element = Array.from(container.querySelectorAll('*'))
    .find(el => el.textContent === text);

  if (!element) {
    throw new Error(`Element with text "${text}" not found.`);
  }
  return element as HTMLElement
}

describe('verify_pack.Calculator', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  const testcases = [
    ['', '', 'display empty text by default'],
    ['234', '234', 'display number according to all digits that were pushed'],
    ['', '234C', 'display empty text after "C" clicked'],
    ['34+56', '34+56', 'don\'t evaluate before "equal" button pushed'],
    ['34+56+', '34+56++++', 'display at most one operator at the end even if more were pushed'],
    ['34+56/', '34+56+-*/', 'display the last operator, if more than one operator was pushed'],
    ['90', '34+56=', 'add two numbers according to user input'],
    ['-22', '34-56=', 'subtract two numbers according to user input'],
    ['1904', '34*56=', 'multiply two numbers according to user input'],
    ['0.6071428571428571', '34/56=', 'divide two numbers according to user input'],
    ['9.5', '5+6*3/4=', 'perform sequence of computations according to user input'],
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
