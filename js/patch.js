// add removeAllChildren to Node Object

Node.prototype.removeAllChildren = function() {
    while(this.firstChild){
        this.removeChild(this.firstChild);
    }
};
// ON NUMBER 4 840