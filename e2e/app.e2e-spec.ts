import { Ng2electronPage } from './app.po';

describe('ng2electron App', () => {
  let page: Ng2electronPage;

  beforeEach(() => {
    page = new Ng2electronPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
