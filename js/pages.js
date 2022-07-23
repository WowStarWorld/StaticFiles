function require(url){
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
    return script;
};

(function _(){
    require("./js/functions.js");
})();

window.onload = function(){
    switch (window.location.hash.substring(1)) {
        case "":
            $("#content-body").html("<br/><br/>");
            break;
        case "about":
            $("#content-body").addClass("text-light").css("line-height", "1.5");
            $("#content-body").html(`
            <br/><br/>
            <h1 style="color:#ffffff;">关于</h1>
            <br/>
            <h3>字体</h3>
            <p>ASCII字体：Minecraft Regular</p>
            <p>UNICODE字体：GNU Unifont</p>
            <br/>
            <h3>贡献者</h3>
            <p>作者：StarWorld</p>
            `);
            break;
        case "login":
            createModal(
                "登录", 
                "测试", 
                $("<button>").addClass("btn btn-primary").text("登录").click(() => {
                    $("#modal").modal("hide");
                })).modal("show");
            break;
        default:
            $("#content-body").html("<br/><br/><center><h1 class=text-light>404 页面未找到</h1></center>");
    };
};

window.onhashchange = () => {location.reload()};