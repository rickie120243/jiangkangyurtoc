var React=require("react");
var E=React.creatElement;
var TreeToc=require("ksana2015-treetoc").Component;
var tocdata=require("./toclist2.json");
var maincomponent = React.createClass({
  render: function() {
    return <div>
    <TreeToc toc={tocdata}/>
    </div>;
  }
});
module.exports=maincomponent;