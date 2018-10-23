describe('atchillect', () => {
  describe('getImage', () => {
    const BASE_URL = 'https://archillect-api.now.sh/visuals';
    const mockAxios = {
      get: () => {},
    };
    jest.mock('axios', () => mockAxios);
    const archillect = require('../archillect').default;

    test('getImage - happy path', async () => {
      // Arrange
      const expectedImageId = 196681;
      const expectedImageUrl = 'http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif';
      const expectedImageResponse = { url: expectedImageUrl };
      const expectedGetPath = `${BASE_URL}/${expectedImageId}`;
      const expectedResponse = {
        sourceLinks: [
          'https://www.google.com/searchbyimage?safe=offℑurl=http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif',
        ],
        imageSource: expectedImageUrl,
        original: `http://archillect.com/${expectedImageId}`,
        id: expectedImageId,
      };
      mockAxios.get = jest.fn(() => new Promise((resolve) => { resolve(expectedResponse); }));

      // Act
      const actualImageResponse = await archillect.getImage(expectedImageId);

      // Assert
      expect(actualImageResponse).toEqual(expectedImageResponse);
      expect(mockAxios.get).toHaveBeenCalledWith(expectedGetPath);
    });

    test('getImage - image does not exist yet', async () => {
      // Arrange
      const expectedLatestImageId = 196682;
      const expectedError = { latestImageId: expectedLatestImageId };
      const expectedImageId = 204863;
      const expectedGetPath = `${BASE_URL}/${expectedImageId}`;
      const expectedResponse = {
        error: `The id ${expectedImageId} should be between 1 and ${expectedLatestImageId}`,
      };
      mockAxios.get = jest.fn(() => new Promise((resolve) => { resolve(expectedResponse); }));

      // Act
      const actualError = await archillect.getImage(expectedImageId);

      // Arrange
      expect(actualError).toEqual(expectedError);
      expect(mockAxios.get).toHaveBeenCalledWith(expectedGetPath);
    });

    test('getImage - rejected', async () => {
      // Arrange
      const expectedError = new Error('Ooops');
      const expectedImageId = 204863;
      const expectedGetPath = `${BASE_URL}/${expectedImageId}`;
      mockAxios.get = jest.fn(() => new Promise((resolve, reject) => { reject(expectedError); }));

      try {
        // Act
        await archillect.getImage(expectedImageId);
        throw new Error('Did not throw error');
      } catch (actualError) {
        // Arrange
        expect(actualError).toEqual(expectedError);
        expect(mockAxios.get).toHaveBeenCalledWith(expectedGetPath);
      }
    });
  });
});
