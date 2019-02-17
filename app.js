function search() {
    var input = document.getElementById('Input');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("UL");
    var li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    }
}