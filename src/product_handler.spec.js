const { getProducts } = require('./product_handler');

describe('profileDetailsHandler', () => {
    it('should return 200', async () => {
        const result = await getProducts({});
        expect(result.statusCode).toEqual(200);
    });
});

