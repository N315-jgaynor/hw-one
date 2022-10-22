import * as MODEL from "../model/model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(pageID);
  MODEL.changePageContent(pageID);
}
function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
  // we call it ourselves because nothing will load in the page when we first get on the page
}

$(document).ready(function () {
  initURLListener();
});
