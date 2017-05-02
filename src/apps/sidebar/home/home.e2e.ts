import { browser, by, element } from 'protractor';

describe('Sidebar App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/sidebar/#/home');
  });

  it('should have a title', () => {
    const subject = browser.getTitle();
    const result  = 'Sample App';
    expect<any>(subject).toEqual(result);
  });

});
