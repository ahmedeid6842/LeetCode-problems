class Node {
    constructor(val, prev, next) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.homepage = homepage;
    this.currentPage = new Node(homepage, null, null);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
     this.currentPage.next = new Node(url, this.currentPage, null);
        this.currentPage = this.currentPage.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
        while (this.currentPage.prev && steps != 0) {
            this.currentPage = this.currentPage.prev;
            steps--;
        }
        return this.currentPage.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
        while (this.currentPage.next && steps != 0) {
            this.currentPage = this.currentPage.next;
            steps--;
        }
        return this.currentPage.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */