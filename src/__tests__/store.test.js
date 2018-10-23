describe('store', () => {
  const store = require('../store');
  const { DEFAULT_STATE } = store;

  describe('mutations', () => {
    const {
      mutations,
      RESET_MUTATION,
      SET_IMAGE_ID_MUTATION,
      SET_IMAGE_URL_MUTATION,
    } = store;

    test(RESET_MUTATION, () => {
      // Arrange
      const expectedDefaultState = DEFAULT_STATE;
      const expectedState = {
        counter: true,
        imageId: 111111,
        imageUrl: 'yourmom.jpg',
      };

      // Act
      mutations[RESET_MUTATION](expectedState);

      // Assert
      expect(expectedState).toEqual(expectedDefaultState);
    });

    test(SET_IMAGE_ID_MUTATION, () => {
      // Arrange
      const expectedImageId = 204863;
      const expectedState = DEFAULT_STATE;

      // Act
      mutations[SET_IMAGE_ID_MUTATION](expectedState, expectedImageId);

      // Assert
      expect(expectedState.imageId).toEqual(expectedImageId);
    });

    test(SET_IMAGE_URL_MUTATION, () => {
      // Arrange
      const expectedImageUrl = 'http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif';
      const expectedState = DEFAULT_STATE;

      // Act
      mutations[SET_IMAGE_URL_MUTATION](expectedState, expectedImageUrl);

      // Assert
      expect(expectedState.imageUrl).toEqual(expectedImageUrl);
    });
  });
});
