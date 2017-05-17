import { Ng4MaterialTutorialPage } from './app.po';

describe('ng4-material-tutorial App', function() {
  let page: Ng4MaterialTutorialPage;

  beforeEach(() => {
    page = new Ng4MaterialTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
