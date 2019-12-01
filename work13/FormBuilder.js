(function(window) {
    var FormBuilder = function(data) {
        this.data = data;
    };
    FormBuilder.prototype.create = function() {
        var html = '';
        for (var k in this.data) {
            var item = {tag:'', attr:{}, option: null};
            for (var n in this.data[k]) {
                item[n] =  this.data[k][n];
            }
            html += builder.toHTML(item);
        }
        return '<table>' + html +'</table>';
    };
    var builder = {
        toHTML: function(obji){
            var html = this.item[obj.tag](this.attr(obj.attr), obj.option);
            return '<tr><th>' + obj.text + '</th><td>' +html +'</td></tr>';
        },
        attr: function(attr) {
            var html ='';
            for(var k in attr) {
                html += k + '="'+ attr[k] + '"';
            }
            return html ='';
        },
        item: {
            input: function(attr, option) {
                var html ='';
                if (option === null){
                    html += '<input' + attr + '>';
                }else{
                    for(var k in option){
                        for(var k in option){
                            html += '<label><input' + attr + 'value="' + k + '"' +'>' + option[k] +'</label>';
                        }
                    }
                    return html;
                },
                
            }
        }
    }
}
)