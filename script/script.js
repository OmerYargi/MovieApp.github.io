(() => {
    document.addEventListener("DOMContentLoaded", () => {
        // Detail Close Function
        (() => {
            document.querySelector(".close-detail").addEventListener("click", () => {
                document.querySelector(".details").attributes.getNamedItem("style").value = "display: none";

            });
        })();

        // Detail Open Function
        (() => {
            var bilgi = document.getElementsByClassName("filmsBox");
            for (let blg of bilgi) {
                blg.addEventListener("click", () => {
                    document.querySelector(".details").attributes.getNamedItem("style").value = "display: fixed";
                });
            }
        })();

        // Side Bar Close Open Button Function
        (() => {
            var sideBar = document.querySelector(".sideBar");
            var btn = document.querySelector(".sideBar-Btn");
            btn.addEventListener("click", () => {
                var visibility = sideBar.getAttribute("data-visibility");
                if(visibility === "true"){
                    sideBar.setAttribute("data-visibility", "false");
                }
                else{
                    sideBar.setAttribute("data-visibility", "true");
                }
            });
        })();
    });
})();