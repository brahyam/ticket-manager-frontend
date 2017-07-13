import { TicketManagerFrontendPage } from './app.po';

describe('ticket-manager-frontend App', () => {
  let page: TicketManagerFrontendPage;

  beforeEach(() => {
    page = new TicketManagerFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
