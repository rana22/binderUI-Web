import { BinderUIPage } from './app.po';

describe('binder-ui App', function() {
  let page: BinderUIPage;

  beforeEach(() => {
    page = new BinderUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
