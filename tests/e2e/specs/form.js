describe('Home page', () => {
  const expectedInputSelector = 'form > input';
  it('Visits the app root url', () => {
    // Arrange

    // Act
    cy.visit('/');

    // Assert
    cy.get('img');
    cy.contains('h1', 'Vuellect');
    cy.get(expectedInputSelector);
  });

  it('Types image number', () => {
    // Arrange
    const expectedImageId = 204863;
    const expectedResultSelector = '.result';
    cy.visit('/');

    // Act
    cy.get(expectedInputSelector).type(expectedImageId);

    // Assert
    cy.contains(expectedResultSelector, expectedImageId);
  });
});
