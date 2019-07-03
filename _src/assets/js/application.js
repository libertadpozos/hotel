function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function check(evt, regimen) {
    //Array list of radio options
    var radioList = ['sinRegimen', 'desayuno', 'mediaPension', 'todoIncluido', 'premium'];
    //Adding the unselected style to all boxes
    for (var i = 0; i < radioList.length; i++) {
        $("#" + radioList[i]).css({ 'border': '1px solid grey' });
        $("#" + radioList[i]).css({ 'box-shadow': '' });
        $("#" + radioList[i] + 'Grid').css({ 'border-color': '#8ed7f8' });
        $("#" + radioList[i] + 'Check').css({ 'border-color': '' });
    }
    //Checking or unchecking radio when user clicks on the whole box. Adding selected styles to boxes.
    if ($("#" + regimen)[0].checked == false) {
        $("#" + regimen)[0].checked = true;
        $("#" + regimen).css({ 'border': '1px solid #4abb4a' });
        $("#" + regimen).css({ 'box-shadow': 'inset 0 0 0 3px white' });
        $("#" + regimen + 'Grid').css({ 'border-color': 'blue' });
        $("#" + regimen + 'Check').css({ 'border-color': 'blue' });
    }
    else {
        $("#" + regimen)[0].checked = false;
    }
}

function showHideCollapse(id) {
    var x = document.getElementById(id);
    var y = document.getElementById(id + 'Img');
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        y.className += " showImg";
    } else { 
        x.className = x.className.replace(" show", "");
        y.className = y.className.replace(" showImg", "");
    }
}