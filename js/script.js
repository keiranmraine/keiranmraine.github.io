$(document).ready(function () {
  var contentSelected = 'profile';
  if(window.location.hash) {
    contentSelected = window.location.hash.substr(1);
  }
  renderContent(contentSelected);
  selectedPage(contentSelected);
});

$(function(){
  $('a.pageFetcher').click(function(){
    var selected = $(this).attr('href');
    var a = selected.substring(1);
    renderContent(a);
    selectedPage(a);
  });
});

function selectedPage(a) {
  $('a.pageFetcher').each(function() {
    if($(this).attr('href') === '#'+a) {
      $(this).addClass('currentLink');
    }
    else {
      $(this).removeClass('currentLink');
    }
  });
}

function renderContent(a) {
  var conv = new showdown.Converter({extensions: ['targetblank']});
  if(a === 'papers') {
    $.get('docs/'+a+'.csv', function(data) {
      $('#content').html(conv.makeHtml(pubMedToMd($.csv.toObjects(data))));
    });
  }
  else {
    $.get('docs/'+a+'.md', function(data) {
      $('#content').html(conv.makeHtml(data));
    });
  }
}

function pubMedToMd(pmRecs) {
  var mdStr='# Papers\n';
  for (var i=0,  tot=pmRecs.length; i < tot; i++) {
    var rec = pmRecs[i];
    mdStr += '* ['+rec['Title']+'](https://www.ncbi.nlm.nih.gov'+rec['URL']+')';
    mdStr += ' *'+rec['ShortDetails']+'*  \n';
    mdStr += rec['Description'].replace(/(Raine [^,]+)/, '**$1**')+'\n';
  }
  mdStr += '### PubMed query\nBase data generated using the following PubMed query and exporting as csv:\n';
  mdStr += '```\nRaine Keiran [Author - Full]\n```\n';
  return mdStr;
}
