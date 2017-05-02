import { browser, by, element } from 'protractor';

describe('Main App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/main/#/home');
  });

  it('should have a title', () => {
    const subject = browser.getTitle();
    const result  = 'Sample App';
    expect<any>(subject).toEqual(result);
  });

  it('should have `your content here` x-large', () => {
    const subject = element(by.css('[x-large]')).getText();
    const result  = 'Your Content Here';
    expect<any>(subject).toEqual(result);
  });

});
