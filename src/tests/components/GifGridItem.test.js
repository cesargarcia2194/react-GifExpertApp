import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componente GifGridItem', () => {
    const title = 'Un titulo';
    const url = 'http://localhost:3000/products';
    const wrapper = shallow(<GifGridItem url={url} title= {title} />)
    test('Debe mostrar el componente <GifGrdItem /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe contoner la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        //console.log(div.prop('className').includes('animate__fadeIn'))
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })
    
})