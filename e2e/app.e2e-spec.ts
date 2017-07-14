import { HHousePage } from './app.po';

describe('h-house App', () => {
  let page: HHousePage;

  beforeEach(() => {
    page = new HHousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
