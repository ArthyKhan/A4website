import { GithabAppPage } from './app.po';

describe('githab-app App', () => {
  let page: GithabAppPage;

  beforeEach(() => {
    page = new GithabAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
