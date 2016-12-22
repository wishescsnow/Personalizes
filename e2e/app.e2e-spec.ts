import { PersonalizesPage } from './app.po';

describe('personalizes App', function() {
  let page: PersonalizesPage;

  beforeEach(() => {
    page = new PersonalizesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
