import './sources.css';

export interface Item {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

class Sources {
    draw(data: Item[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const filter = document.querySelector('#filter') as HTMLInputElement;

        data.filter((el) => el.name.toLowerCase().includes(filter.value.toLowerCase()))
            .slice(0, 5)
            .forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

                (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            });

        (document.querySelector('.sources') as HTMLElement).textContent = '';
        (document.querySelector('.sources') as HTMLElement).append(fragment);
        if (filter.value.length === 0) {
            (document.querySelector('.sources') as HTMLElement).textContent = '';
        }
    }
}

export default Sources;
