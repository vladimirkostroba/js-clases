class StringBuilder{
    constructor(string){
      this._string = string;
    }

    get string(){
        return this._string
    }

    append(str){
        this._string = this._string + str;
    }

    prepend(str){
        this._string = str + this._string;
       
    }
    
    pad(str){
        this._string = str + this._string + str;
    }
}

const builder = new StringBuilder('.');


console.log(builder.string);

builder.append('^');
console.log(builder.string); // '.^'

builder.prepend('^');
console.log(builder.string); // '^.^'

builder.pad('=');
console.log(builder.string); // '=^.^='