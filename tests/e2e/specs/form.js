describe('Home page', () => {
  const expectedInputSelector = '.image-id';
  it('Visits the app root url', () => {
    // Arrange
    const expectedButtonSelector = 'button';
    const expectedButtonText = 'Get inspired';
    const expectedDefaultOutputSelector = '.kojima';

    // Act
    cy.visit('/');

    // Assert
    cy.get(expectedDefaultOutputSelector).find('img').should('be.visible');
    cy.contains('h1', 'Vuellect');
    cy.get(expectedInputSelector);
    cy.contains(expectedButtonSelector, expectedButtonText);
  });

  it('Types image number', () => {
    // Arrange
    const expectedImageId = 130132;
    const expectedResultSelector = '.result';
    const expectedImageSelector = 'img';
    const expectedButtonSelector = '.button';
    cy.visit('/');
    cy.get(expectedInputSelector).type(expectedImageId);

    // Act
    cy.get(expectedButtonSelector).click();

    // Assert
    cy.get(expectedResultSelector).find(expectedImageSelector).should('be.visible');
  });

  it('Types image number from future', () => {
    // Arrange
    const expectedImageId = 204863;
    const expectedResultSelector = '.result';
    const expectedCounterSelector = '.counter';
    const expectedButtonSelector = '.button';
    cy.visit('/');
    cy.get(expectedInputSelector).type(expectedImageId);

    // Act
    cy.get(expectedButtonSelector).click();

    // Assert
    cy.get(expectedResultSelector).find(expectedCounterSelector).should('be.visible');
  });
});
