describe('store', () => {
  const mockArchillect = { getImage: () => {} };
  jest.mock('../services/archillect', () => mockArchillect);

  const store = require('../store');
  const { DEFAULT_STATE } = store;

  describe('mutations', () => {
    const {
      mutations,
      RESET_MUTATION,
      SHOW_COUNTER_MUTATION,
      SHOW_IMAGE_MUTATION,
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

    test(SHOW_COUNTER_MUTATION, () => {
      // Arrange
      const expectedImageId = 204863;
      const expectedState = DEFAULT_STATE;

      // Act
      mutations[SHOW_COUNTER_MUTATION](expectedState, expectedImageId);

      // Assert
      expect(expectedState.imageId).toEqual(expectedImageId);
      expect(expectedState.counter).toEqual(true);
      expect(expectedState.imageUrl).toBeNull();
    });

    test(SHOW_IMAGE_MUTATION, () => {
      // Arrange
      const expectedImageUrl = 'http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif';
      const expectedState = DEFAULT_STATE;

      // Act
      mutations[SHOW_IMAGE_MUTATION](expectedState, expectedImageUrl);

      // Assert
      expect(expectedState.imageUrl).toEqual(expectedImageUrl);
      expect(expectedState.counter).toEqual(false);
      expect(expectedState.imageId).toBeNull();
    });
  });

  describe('actions', () => {
    const {
      actions,
      FETCH_IMAGE_ACTION,
      SHOW_IMAGE_MUTATION,
      SHOW_COUNTER_MUTATION,
      RESET_MUTATION,
    } = store;

    const expectedContext = { commit: jest.fn() };

    beforeEach(() => {
      jest.resetAllMocks();
    });

    test(`${FETCH_IMAGE_ACTION} - happy path`, async () => {
      // Arrange
      const expectedImageId = 196681;
      const expectedMutationName = SHOW_IMAGE_MUTATION;
      const expectedImageUrl = 'http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif';
      const expectedImageResponse = { url: expectedImageUrl };
      mockArchillect.getImage = jest.fn(() =>
        new Promise((resolve) => {
          resolve(expectedImageResponse);
        }));

      // Act
      await actions[FETCH_IMAGE_ACTION](expectedContext, expectedImageId);

      // Assert
      expect(mockArchillect.getImage).toHaveBeenCalledWith(expectedImageId);
      expect(expectedContext.commit).toHaveBeenCalledWith(expectedMutationName, expectedImageUrl);
    });

    test(`${FETCH_IMAGE_ACTION} - image does not exist yet`, async () => {
      // Arrange
      const expectedImageId = 204863;
      const expectedLatestImageId = 196681;
      const expectedMutationName = SHOW_COUNTER_MUTATION;
      const expectedError = { latestImageId: expectedLatestImageId };
      mockArchillect.getImage = jest.fn(() =>
        new Promise((resolve) => {
          resolve(expectedError);
        }));

      // Act
      await actions[FETCH_IMAGE_ACTION](expectedContext, expectedImageId);

      // Assert
      expect(mockArchillect.getImage).toHaveBeenCalledWith(expectedImageId);
      expect(expectedContext.commit).toHaveBeenCalledWith(expectedMutationName, expectedImageId);
    });

    test(`${FETCH_IMAGE_ACTION} - error`, async () => {
      // Arrange
      const expectedImageId = 204863;
      const expectedMutationName = RESET_MUTATION;
      const expectedError = new Error('Ooops');
      mockArchillect.getImage = jest.fn(() =>
        new Promise((resolve, reject) => {
          reject(expectedError);
        }));

      // Act
      await actions[FETCH_IMAGE_ACTION](expectedContext, expectedImageId);

      // Assert
      expect(mockArchillect.getImage).toHaveBeenCalledWith(expectedImageId);
      expect(expectedContext.commit).toHaveBeenCalledWith(expectedMutationName);
    });
  });
});
