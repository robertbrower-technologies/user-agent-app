import { UserAgentAppPage } from './app.po';

describe('user-agent-app App', () => {
  let page: UserAgentAppPage;

  beforeEach(() => {
    page = new UserAgentAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
