import { WebPublishPage } from './app.po';

describe('web-publish App', () => {
  let page: WebPublishPage;

  beforeEach(() => {
    page = new WebPublishPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
