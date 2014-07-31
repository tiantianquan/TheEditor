var pen ={};
pen.tool = {};

//工具栏位置
pen.pos = {};

//选定的内容
pen.selection = window.getSelection();

//根据选择内容设置弹出工具栏位置
pen.getPenPos = function(){
    var selection = this.selection;
    var pos = {x:0,y:0};
    if (selection.type == 'Range'){
        var rect = selection.getRangeAt(0).getBoundingClientRect();
        pos.x = rect.left + rect.width/2;
        pos.y = rect.top;

        this.pos = pos;
        return pos;
    } 
};

//改变标签--h1,h2,h3,p
pen.changeTag = function(tagName){
    var sel = this.selection;
    if (sel.type == 'Range'){
        var htmlText = $(sel.anchorNode.parentElement).html();
        htmlText = '<'+tagName+'>'+htmlText + '</' +tagName +'>';
        $(sel.anchorNode.parentElement).replaceWith(htmlText);
    }
};