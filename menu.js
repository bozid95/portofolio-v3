$(document).ready(function () {
  $(".nav-link").click(function () {
    var menu = $(this).attr("id");
    if (menu == "homemenu") {
      $(".content").load("home.html");
    } else if (menu == "projectmenu") {
      $(".content").load("project.html");
    } else if (menu == "articlemenu") {
      $(".content").load("article.html");
    } else if (menu == "aboutmenu") {
      $(".content").load("about.html");
    } else if (menu == "skillmenu") {
      $(".content").load("skill.html");
    }
  });

  // halaman yang di load default pertama kali
  $(".content").load("home.html");
});
