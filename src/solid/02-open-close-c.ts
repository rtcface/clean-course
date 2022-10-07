// import axios from 'axios';

export class HttpClient {

    // async get( url: string ){

    //     const { data, status } = await axios.get( url );
    //     console.log(status);
    //     return { data, status };
    // }

    async get( url: string){
        
        const result = await fetch( url );
        const data  = result.json();
        console.log(result.status);
        return { data, status: result.status };
    }

}