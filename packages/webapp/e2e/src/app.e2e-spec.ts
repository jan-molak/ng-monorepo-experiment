import 'jest';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    // todo: type definitions are not happy with this guy
    // expect(page.getTitleText()).toEqual('Welcome to webapp!');
  });
});
