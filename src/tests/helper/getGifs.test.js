import { getGifs } from '../../helper/getGifs';

describe('Pruebas en getGifs Fetch', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10)
    })
        
})
