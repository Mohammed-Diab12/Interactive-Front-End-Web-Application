describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
    cy.wait(500);
  });

  describe("Create Set Form", () => {
    it("should submit successfully with valid input (happy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();

      cy.get('[data-cy="set_form"] input[name="titleInput"]').type(
        "Mathematics Fundamentals",
      );

      cy.get('[data-cy="set_form"] input[type="submit"]').click();

      cy.get(".setContainer").should("contain", "Mathematics Fundamentals");

      cy.get('[data-cy="set_form"]').should("have.class", "notVisible");
    });

    it("should show error when submitting empty title (unhappy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();

      cy.get('[data-cy="set_form"] input[type="submit"]').click();

      cy.get(".error").should("be.visible");
      cy.get(".error").should("contain", "TITLE CANNOT BE EMPTY");

      cy.get('[data-cy="set_form"]').should("not.have.class", "notVisible");
    });
  });

  describe("Add Card Form", () => {
    beforeEach(() => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"] input[name="titleInput"]').type(
        "Test Card Set",
      );
      cy.get('[data-cy="set_form"] input[type="submit"]').click();
      cy.wait(300);

      cy.get(".cardSets").contains("Test Card Set").click();
      cy.wait(500);
    });

    it("should submit successfully with valid input (happy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();

      cy.get('[data-cy="card_form"] input[name="termInput"]').type(
        "What is 2+2?",
      );
      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type("4");

      cy.get('[data-cy="card_form"] input[type="submit"]').click();

      cy.get(".cardContainer").should("contain", "What is 2+2?");

      cy.get("button").contains("Next").click();
      cy.get(".cardContainer").should("contain", "What is 2+2?");

      cy.get('[data-cy="card_form"]')
        .parent()
        .should("have.class", "notVisible");
    });

    it("should show error when both term and description are empty", () => {
      cy.get('[data-cy="toggle_form"]').click();

      cy.get('[data-cy="card_form"] input[type="submit"]').click();

      cy.get(".error").should("be.visible");
      cy.get(".error").should(
        "contain",
        "TERM AND DESCRIPTION CANNOT BE EMPTY",
      );
    });

    it("should show error when only term is empty", () => {
      cy.get('[data-cy="toggle_form"]').click();

      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type(
        "Some description",
      );

      cy.get('[data-cy="card_form"] input[type="submit"]').click();

      cy.get(".error").should("be.visible");
      cy.get(".error").should("contain", "TERM CANNOT BE EMPTY");
    });

    it("should show error when only description is empty", () => {
      cy.get('[data-cy="toggle_form"]').click();

      cy.get('[data-cy="card_form"] input[name="termInput"]').type("Some term");

      cy.get('[data-cy="card_form"] input[type="submit"]').click();

      cy.get(".error").should("be.visible");
      cy.get(".error").should("contain", "DESCRIPTION CANNOT BE EMPTY");
    });
  });
});
