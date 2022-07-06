class MeLiApi_class {
    
    #API_URL = 'https://api.mercadolibre.com/';

    constructor() {
        
        // ES6 Singleton
        if (MeLiApi_class._instance) return MeLiApi_class._instance;
        MeLiApi_class._instance = this;
        
    }
    
    async search(query) {

        const url = new URL(this.#API_URL + 'sites/MLA/search');
        url.searchParams.set('q', query);

        const response = await fetch(url.toString());
        const searchResults = await response.json();

        return {
            
            author: {
                name: 'Manuel',
                lastname: 'Vega'
            },
            
            categories: searchResults['filters'].find(filter => {
                return filter['id'] === 'category';
            })['values'][0]['path_from_root'].map(path => path['name']),
            
            items: Array.from({length: 4}).map(function (_, index) {
                
                const item = searchResults['results'][index];
                
                return ({
                    id: item['id'],
                    title: item['title'],
                    price: {
                        currency: item['currency_id'],
                        amount: item['price'],
                        decimals: 2 // ...?
                    },
                    picture: item['thumbnail'],
                    condition: item['condition'],
                    free_shipping: item['shipping']['free_shipping']
                });
                
            })
            
        };
        
    }
    
    async details(itemID) {

        const url = new URL(this.#API_URL + 'items/');

        const detailsResponse = await fetch(url.toString() + itemID);
        const details = await detailsResponse.json();
        
        const descriptionResponse = await fetch(url.toString() + itemID + '/description');
        const description = await descriptionResponse.json();
        
        return ({
            
            author: {
                name: 'Manuel',
                lastname: 'Vega'
            },
            
            item: {
                id: details['id'],
                title: details['title'],
                price: {
                    currency: details['currency_id'],
                    amount: details['price'],
                    decimals: 2
                },
                picture: details['pictures'][0]['secure_url'],
                condition: details['condition'],
                free_shipping: details['shipping']['free_shipping'],
                sold_quantity: details['sold_quantity'],
                description: description['plain_text']
            }
            
        })
        
    }
    
}

export default new MeLiApi_class();