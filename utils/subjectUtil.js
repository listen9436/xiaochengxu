//取到每一条数据中的 名称，导演，主演，类型，上映年份等信息。
function processSubject(subject){
      //电影名称
     var title = subject.title;
      //导演
     var directors=subject.directors;
     var directorStr="";
     for(var index in directors){
        directorStr=directorStr+directors[index].name+" / ";
     }
    if(directorStr!=""){
        directorStr= directorStr.substring(0,directorStr.length-2);
    }
      //主演
    var casts=subject.casts;
    var castStr="";
    for(var index in casts){
        castStr=castStr+casts[index].name+" / ";
    }
    if(castStr!=""){
        castStr=castStr.substring(0,castStr.length-2);
    }
      //类型
    var genres=subject.genres;
    var genresStr="";
    for(var index in genres){
        genresStr=genresStr+genres[index]+" / ";
    }
    if(genresStr!=""){
        genresStr= genresStr.substring(0,genresStr.length-2);
    }
      //上映年份
    var year = subject.year;

      //拼接字符串
    var text ="名称: "+title+"\n导演: "+directorStr+"\n主演："+castStr+"\n类型: "+genresStr+"\n 上映年份:"+year+"(中国大陆)";
    subject.text = text; 
    //js特性，即使没有这个属性，只要 . 这个属性，他就自动创建了这个属性,这样，subject里面就带有了 text属性
  }
  
  //拿到20条数据中的每一条，对每一条数据执行上面的方法。
function processSubjects(subjects){
       for(var i=0;i<subjects.length;i++){
            var subject =subjects[i];
            this.processSubject(subject);
        }
}

//对外提供这两个方法。
module.exports = {
     processSubject: processSubject,
     processSubjects:processSubjects
}
