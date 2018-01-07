import { Ng41Page } from './app.po';

describe('ng41 App', () => {
  let page: Ng41Page;

  beforeEach(() => {
    page = new Ng41Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
