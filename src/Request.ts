import {Client} from "./Client";
import XhrRequest from "./XhrRequest";
export default class Request {

    private uri;
    private requestMethod;
    private headers;

    constructor (private apiAiClient : Client, private options) {
        this.uri = this.apiAiClient.getApiBaseUrl() + 'query?v=' + this.apiAiClient.getApiVersion();
        this.requestMethod = 'POST';
        this.options['lang'] = this.apiAiClient.getApiLang();
        this.headers = {
            'Authorization': 'Bearer ' + this.apiAiClient.getAccessToken()
        }
    }

    /**
     * @todo: deal with Access-Control headers, probably on server-side
     */
    public perform () {
        console.log('performing test request on URI', this.uri, 'with options:', this.options, 'with headers', this.headers);
        XhrRequest.sendRequest(this.uri, this.options, this.headers, (resp) => {
            console.log('server responded with', resp);
        })
    }

}