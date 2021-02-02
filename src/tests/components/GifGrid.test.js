import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componenete <GifGrid />', () => {
    
    
    test('El componenete debe ser renderizado correctamente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category = "Dragon ball"/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'abc',
            url: 'https://imagescda.com',
            title: 'cualquiera'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        })
        const wrapper = shallow(<GifGrid category = "Dragon ball"/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
