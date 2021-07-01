import axios from 'axios'

class HTTPCLIENT{

        public async $FETCH_CATDATA(){
            const BASEURL = "https://api.thecatapi.com/v1/images/search";

            const FETCH = axios.create({
                baseURL: BASEURL,
            })
            const ALL_SEARCHED_RESULTS = await FETCH.get('');
            const DATASET = ALL_SEARCHED_RESULTS.data;
            var Addedkey = DATASET;
            Addedkey = Addedkey?.[0];
            var OBJ = {'AnimalType': 'cat', 'url': Addedkey?.url};
            return OBJ;    
        }

        public  async $FETCH_DOGDATA(){
            const BASEURL = "https://dog.ceo/api/breeds/image/random";

            const FETCH = axios.create({
                baseURL: BASEURL,
            })
            const ALL_SEARCHED_RESULTS = await FETCH.get('');
            const DATASET = ALL_SEARCHED_RESULTS.data;
            var Addedkey = DATASET;
            var OBJ = {'AnimalType': 'dog', 'url': Addedkey?.message};
            return OBJ;       
        }

        public  async $FETCH_FOXDATA(){
            const BASEURL = "https://randomfox.ca/floof/";

            const FETCH = axios.create({
                baseURL: BASEURL,
            })
            const ALL_SEARCHED_RESULTS = await FETCH.get('');
            const DATASET = ALL_SEARCHED_RESULTS.data;
            var OBJ = {'AnimalType': 'fox', 'url': DATASET?.image};
            return OBJ;   
        }

}


export default HTTPCLIENT;