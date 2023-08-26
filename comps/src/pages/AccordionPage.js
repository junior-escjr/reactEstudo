import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            label: 'titulo 1',
            content: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma uma pindureta.Mé faiz elementum girarzis, nisi eros vermeio.'
        },
        {
            label: 'titulo 2',
            content: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma uma pindureta.Mé faiz elementum girarzis, nisi eros vermeio.'
        },
        {
            label: 'titulo 3',
            content: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma uma pindureta.Mé faiz elementum girarzis, nisi eros vermeio.'
        }
    ]
    return <Accordion items={ items } />
}

export default AccordionPage;