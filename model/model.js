export function changePageContent(pageID) {
  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      //   console.log(data);
      $("#app").html(data);
    });
    // this is saying that if pageID does NOT equal nothing, that means something is there -> something was clicked
  } else {
    $.get(`pages/home/home.html`, function (data) {
      //   console.log(data);
      $("#app").html(data);
    });
    // this is setting the default to home -> change this to whatever page you're developing
  }
}
