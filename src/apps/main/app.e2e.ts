import { browser, by, element } from 'protractor';

describe('Main App', () => {

  beforeEach(() => {
    browser.get('/main/');
  });

  it('should have a title', () => {
    const subject = browser.getTitle();
    const result  = 'Sample App';
    expect<any>(subject).toEqual(result);
  });

  it('should have header', () => {
    const subject = element(by.css('h1')).isPresent();
    const result  = true;
    expect<any>(subject).toBe(result);
  });

  it('should have <home>', () => {
    const subject = element(by.css('app home')).isPresent();
    const result  = true;
    expect<any>(subject).toEqual(result);
  });

  it('should have buttons', () => {
    const subject = element(by.css('button')).getText();
    const result  = 'Submit Value';
    expect<any>(subject).toEqual(result);
  });

});
