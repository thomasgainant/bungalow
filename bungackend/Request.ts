export class Request{
    crawlerInstance:any;

    constructor(crawlerInstance:any){
        this.crawlerInstance = crawlerInstance;
    }

    async perform(){
        // Navigate the page to a URL
        await this.crawlerInstance.goto('https://developer.chrome.com/');

        // Type into search box
        await this.crawlerInstance.type('.search-box__input', 'automate beyond recorder');

        // Wait and click on first result
        const searchResultSelector = '.search-box__link';
        await this.crawlerInstance.waitForSelector(searchResultSelector);
        await this.crawlerInstance.click(searchResultSelector);

        // Locate the full title with a unique string
        const textSelector = await this.crawlerInstance.waitForSelector(
            'text/Customize and automate'
        );
        const fullTitle = await textSelector?.evaluate((el: { textContent: any; }) => el.textContent);

        // Print the full title
        console.log('The title of this blog post is "%s".', fullTitle);
    }
}