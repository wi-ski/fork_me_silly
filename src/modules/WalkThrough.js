function WalkThrough(conf){
  var pointersKey = conf['dataKey'] || 'pointers';

  var dataList = getQueryString()[pointersKey];

  var steps = eval(dataList);

  if(steps){
      steps.forEach(function(stepObj,index) {
        var item = document.querySelector(stepObj.selector);
        item.setAttribute('data-step', index + 1);
        item.setAttribute('data-intro', stepObj.data);
      });

      introJs().start();
  }

  function getQueryString() {
    var result = {};
    var queryString = location.search.slice(1);
    var regex = /([^&=]+)=([^&]*)/g;
    var m;

    var test = [
        '[',
        '{data:"Fill out this great user!", selector:"#app > ul > li:nth-child(4)"},',
        '{data:"Im some more data2", selector:"#app > ul > li:nth-child(3)"},',
        '{data:"Im some more data3", selector:"#app > ul > li:nth-child(2)"},',
        '{data:"Im some data4", selector:"#app > ul > li:nth-child(1)"}',
        ']'
    ].join('');

    console.log(test);
    console.log('pointers=' + encodeURIComponent(test));

    while (m = regex.exec(queryString)) {
      result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    return result;
  }
}

export default WalkThrough
