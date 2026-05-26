describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should navigate to Home page", () => {
    cy.get("#homePage").click();
    cy.get("h1").should("contain", "Study Night");
    cy.get("main").should("not.be.empty");
  });

  it("should navigate to About page", () => {
    cy.get("#aboutPage").click();
    cy.get("main").should("not.be.empty");
    cy.get('[data-cy="about_page"]').should("contain", "About Study Night");
  });

  it("should navigate to Card Sets page", () => {
    cy.get("#cardSetPage").click();
    cy.get("main").should("not.be.empty");
    cy.get('[data-cy="study-set-header"]').should(
      "contain",
      "Study Set Library",
    );
  });
});
