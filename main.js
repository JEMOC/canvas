window.onload = function() {
  function solar() {
    canvas = document.querySelector("#p1");
    ctx = canvas.getContext("2d");
    sun = new Image();
    sun.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTE2VDIwOjM4OjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA5LTE2VDIwOjM4OjQ1KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0xNlQyMDozODo0NSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOTBiZDg2ZC1jNzg4LWI0NDMtYWM4MS1mODRlMTIxZjBhMzYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1YWI2NmFlYi04MzUwLTQ0NDAtOTRjZC1hOTdmOWZiYTcxNWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmMzYTJlZS1jMmY3LTQxNGItYTliYi1kZWQ5NzA1OTg0YzEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc2YzNhMmVlLWMyZjctNDE0Yi1hOWJiLWRlZDk3MDU5ODRjMSIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0xNlQyMDozODo0NSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTBiZDg2ZC1jNzg4LWI0NDMtYWM4MS1mODRlMTIxZjBhMzYiIHN0RXZ0OndoZW49IjIwMTgtMDktMTZUMjA6Mzg6NDUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4EJKfsAAADfklEQVRogeXbzWtcVRjH8U+vEjfWCNaCpgjdKaWIWhRLW6dVF0I3bY1C+gcUqtvuq0sRhAbtP1AUUmpXogVfaqwEJYIQizsLUhWDkVi7MZjq4pm00+lkXu7LmczMdzf3nnvu78edc869z/OcTf/Nq4pxPItd2IHtmMD9uLfe5jqW8St+wmXMYw5/VSFqU8mGt+FVHMYzuCtnP6v4Bh/iLH4uRZ3yDO/DCbwkv8n1WMXHeBtfFu0sK3h9DbN1IQeVb1a9z4O4WL9XrUhneQ0/hDP4AnuLCOiRvfV7nqlr6Jk8hifxI47muWFJHK1rmOz1wl4Mj2EaM2IG7jfjQss07un2om4nrc04j+fzKEvALA7hz04Nu3nCD4pxs1HNEqvE50JrWzoZHscneKoEUVXzOC7oMNzaGR4TC/+TJYqqmieE5rH1GrQz/A4OlK0oAQeE9pasZ3gSxyuRk4bjeKXViVaz9AR+EC/5g8wyduJq48FWT3ja4JslPJxqPthseL9Yz4aFQ5qW02bDb6bTkoyTjT8aDe/DnqRS0rBHeMPthk+k15KMm97WZumt+AV390lQ1fwrVp/FtSc8ZXjNEt6muPWXPtI/Lck4Qvylx7GkmvDMRmIVD2TYbfjNEh53Zwbra6gouzLxvjkq7MhERmBU2J7h4X6rSMhEZji+jLrlvsytxNYosLloqmXQWMlEynJUuJ6JUMio8HcmktGjwu8ZrvRbRUKuZCJCOSpczvBdv1UkZH7UPg+3ZKJaZq7PYlIwh+W1F49z/VSSiHOMcBBvUeRWh5ULwuNtcem3+qMlCTe9NRqexaX0WirnkvCGO3NLJ5NKScMbjT+aDX8mqnWGhfP4tPFAq4T4NiwY/EjIsi4T4ldxLIGgqjmmySzr13jM4HSlcqrltPBwB+0q8cbE+lWrRFJ1zOJFrLQ62S6mtYKXxXgeFBZEcXpLs3SuxFvCC/i+PE2VsSC0LrVr1E3UchHPiXrLjcpXYugtdmrYbZj2mijvfze/psp4T4zZjpW09FYv/Q9eFxVulew46ZFrQstrQltX5AnEn8VjeD/HtWXxAR6ta+mJvJmH30QZ/n5pPzi+FsWjU3UNPVM01XJRbLyo4SPcKNhfK27U+66JmqtCk2fZG7UeEePqMJ5WbKPWt6L2ecYG3KjVisateDtF4n2L1lvx/hAJgQUVb8X7Hxu+rdmB4twqAAAAAElFTkSuQmCC";
    earth = new Image();
    earth.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTE2VDIwOjQ3OjE1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA5LTE2VDIwOjQ3OjE1KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0xNlQyMDo0NzoxNSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZWRkOWY4Ni1kM2ZkLWJhNGEtYTY4Zi03ZDA5Mzc4ZjY2MzYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplYWFjMWIyYi1mNTkwLTkzNDgtYmE0Ni0yMDNlODNhMDgzNDIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NjM5MzEzYi0xMmIwLWI3NGEtODhkNi01ZjZiMDRmOTljNzYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc2MzkzMTNiLTEyYjAtYjc0YS04OGQ2LTVmNmIwNGY5OWM3NiIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0xNlQyMDo0NzoxNSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZWRkOWY4Ni1kM2ZkLWJhNGEtYTY4Zi03ZDA5Mzc4ZjY2MzYiIHN0RXZ0OndoZW49IjIwMTgtMDktMTZUMjA6NDc6MTUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4kNB0nAAAB0ElEQVRIicXXvW4TQRSG4cdrQ4diioSGCgnSR6KHAqdPwc8NREqAKNfAFZhAwiUkUNDHFE6P4AYiUdGQEEHkzigKhWfI2qy9u978fNIWu6Nz3pmdObvfqVk+VUDXsIhHuI87aIax3/iGz/iEXfzJS1jLATexjlXMFpkhfmIT7TCp0uCnIfhWQeCofhhMeidrMMl4VscWtitAhdjtkKueB67jA1YqAEe1EnIOwUfBbSydIzRqCa/HgZ/gxQVAo54HxhC4iY0LhEZtBNY/8DrmLgE8F1hqlk+v47vidVpVh7idoDUt9MGNh9OEzaIVwZetxQQLVwBeSHDvCsB3G5ipmiW913u9bpGQmUYVSLyPsDKHrYFjBU51TJpeURpaUscJ9otA93rd/yB7ve60JbWf4Ms0kRX1NUGnSoYpX3Ungo+qwCm134fYTdDH26rQEtpCP/6d2jioAi+x2jaDcmLgBteMMWbjlFViOVoLrCEH8t7Alk6EpO+zSmyCNqUWNmpvo9nL9F1TfBqjPuIxTsaBI/yN83Oa7/AyDSXbV58YdA7PVDtwByHH6ih0HDhqB/N4pVydH4WYeRMOa17vFBWbtpazpu1mGPvlrGnrhKufl/AvUWx74omLpiYAAAAASUVORK5CYII=";
    moon = new Image();
    moon.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAC4jAAAuIwF4pT92AAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTE2VDIwOjUzOjMwKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA5LTE2VDIwOjUzOjMwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0xNlQyMDo1MzozMCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmYjZjYzdhMi0xZTA1LTAzNDAtYmRkYS02ZjA4OGFhMDNhOTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MTg2NDFmZS01ODdmLWJiNDgtYTg0ZC02NmUyOTA1YWM1Y2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYzc1YzI5Yi01NTBiLTgyNDItOThlZi04MmJlY2YwOTc3ODQiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVjNzVjMjliLTU1MGItODI0Mi05OGVmLTgyYmVjZjA5Nzc4NCIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0xNlQyMDo1MzozMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYjZjYzdhMi0xZTA1LTAzNDAtYmRkYS02ZjA4OGFhMDNhOTYiIHN0RXZ0OndoZW49IjIwMTgtMDktMTZUMjA6NTM6MzArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7oAlkLAAAANUlEQVQYldXMsQ0AIAwDwbf33zkUQAoKTMtXlnKKqopVjyMBOKC+OaDGzmb2C9SD0/54wwIYeOcIEdhKauoAAAAASUVORK5CYII=";

    draw();
  }

  function draw() {
    ctx.fillStyle = "#222";
    ctx.clearRect(0, 0, 300, 300);
    ctx.fillRect(0, 0, 300, 300);
    ctx.save();

    ctx.drawImage(sun, 120, 120, 60, 60);

    ctx.translate(150, 150);

    ctx.beginPath();
    ctx.strokeStyle = "#222";
    ctx.arc(0, 0, 100, 0, 2 * Math.PI);
    ctx.stroke();

    let time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(100, 0);
    ctx.drawImage(earth, -15, -15, 30, 30);

    ctx.beginPath();
    ctx.arc(0, 0, 30, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    ctx.translate(30, 0);
    ctx.drawImage(moon, -5, -5, 10, 10);

    ctx.restore();

    window.requestAnimationFrame(draw);
  }

  solar();

  function Clock() {
    var clock = document.querySelector("#clock");
    let ctx = clock.getContext("2d");

    ctx.clearRect(0, 0, 300, 300);
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, 300, 300);

    ctx.save();

    ctx.translate(150, 150);

    drawHour(ctx);
    drawTime(ctx);
    ctx.restore();
    window.requestAnimationFrame(Clock);
  }

  function drawHour(ctx) {
    ctx.save();
    let s = (6 * Math.PI) / 180;
    let i = 0;
    while (i <= 60) {
      if (i == 0) {
        ctx.rotate(0);
      } else {
        ctx.rotate(s);
      }
      if (i % 5 == 0) {
        ctx.fillStyle = "#f00";
        ctx.fillRect(-3, -140, 6, 30);
      } else {
        ctx.fillStyle = "#00f";
        ctx.fillRect(-1, -140, 2, 30);
      }
      i++;
    }
    ctx.restore();
  }

  function drawTime(ctx) {
    let time = new Date();
    second = time.getSeconds();
    hour = time.getHours();
    min = time.getMinutes();

    let s = (6 * Math.PI) / 180;
    let h = (30 * Math.PI) / 180;

    //时
    ctx.save();
    ctx.lineCap = "round";
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 8;
    let p = h / 60;
    ctx.rotate(h * hour + min * p);
    // ctx.fillRect(-3, -90, 6, 90)
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -90);
    ctx.stroke();
    ctx.restore();

    //分
    ctx.save();
    let t = s / 60;
    ctx.rotate(min * s + second * t);
    ctx.lineCap = "round";
    ctx.strokeStyle = "#0f0";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -110);
    ctx.stroke();
    ctx.restore();

    //秒
    ctx.save();
    ctx.rotate(second * s);
    ctx.fillStyle = "#00f";
    ctx.fillRect(-1, -120, 2, 130);
    ctx.restore();
  }

  Clock();

  //贪吃蛇函数
  function snake() {}
  //函数初始化
  snake.prototype.init = function() {
    this.score = 0;
    this.body = [
      {
        x: 0,
        y: 0
      }
    ];
    this.maxWidth = 30;
    this.maxHeight = 30;
    this.direction = "right";
    this.food = {};
    this.prey();
  };

  //捕食
  snake.prototype.eat = function(point) {
    this.body.unshift({
      x: point.x,
      y: point.y
    });
  };

  //返回身体数组
  snake.prototype.getBody = function() {
    return this.body;
  };

  //方向控制
  snake.prototype.controll = function() {
    let that = this;
    let dir = that.direction;
    document.addEventListener("keydown", function(e) {
      switch (e.keyCode) {
        case 87:
          if (dir !== "down") {
            that.direction = "up";
          }
          break;
        case 83:
          if (dir !== "up") {
            that.direction = "down";
          }
          break;
        case 65:
          if (dir !== "right") {
            that.direction = "left";
          }
          break;
        case 68:
          if (dir !== "left") {
            that.direction = "right";
          }
          break;
      }
    });
  };

  //身体移动计算
  snake.prototype.move = function() {
    let dir = this.direction;
    let body = this.getBody();
    let last = body[body.length - 1];
    let head = {
      x: body[0].x,
      y: body[0].y
    };
    let food = this.food;

    t(head, dir);
    if (this.gameover(head)) {
      return;
    }
    // body.unshift(head)
    this.eat(head);
    body.pop();
    if (JSON.stringify(head) === JSON.stringify(food)) {
      this.prey();
      body.push(last);
    }
  };

  function t(obj, dir) {
    switch (dir) {
      case "up":
        obj.y--;
        break;
      case "down":
        obj.y++;
        break;
      case "left":
        obj.x--;
        break;
      case "right":
        obj.x++;
    }
  }

  //生成随机食物
  snake.prototype.prey = function() {
    let body = this.body;
    while (true) {
      let p = {
        x: randomNum(),
        y: randomNum()
      };
      if (JSON.stringify(body).indexOf(JSON.stringify(p)) < 0) {
        this.food = p;
        return;
      }
    }
  };

  //判断是否gameover
  snake.prototype.gameover = function(headpoint) {
    let body = this.body;
    if (
      headpoint.x < 0 ||
      headpoint.x > 29 ||
      headpoint.y < 0 ||
      headpoint.y > 29 ||
      JSON.stringify(body).indexOf(JSON.stringify(headpoint)) >= 0
    ) {
      alert("gameover");
      this.init();
      return true;
    }
    return false;
  };

  var game = new snake();
  game.init();

  var f = false;
  var timer;
  let c = document.querySelector("#snake");

  function m() {
    if (f == true) {
      timer = window.setInterval(function() {
        game.move();
        game.controll();
      }, 1000);
    } else {
      window.clearInterval(timer);
    }
  }

  c.addEventListener("click", function() {
    if (f === false) {
      f = true;
    } else {
      f = false;
    }
    m();
  });

  function Snake() {
    let snake = document.querySelector("#snake");
    let ctx = snake.getContext("2d");

    ctx.globalCompositeOperation = "source-over";
    snakeinit(ctx);

    run(ctx, game);
    drawFood(ctx, game);
    window.requestAnimationFrame(Snake);
  }

  function drawFood(ctx, game) {
    ctx.fillStyle = "#0f0";
    drawBlock(ctx, game.food.x, game.food.y);
  }

  function run(ctx, game) {
    ctx.fillStyle = "#fff";
    let body = game.getBody();
    body.forEach(element => {
      let x = element.x;
      let y = element.y;
      drawBlock(ctx, x, y);
    });
  }

  function drawBlock(ctx, x, y) {
    ctx.fillRect(x * 10 + 1, y * 10 + 1, 8, 8);
  }

  function snakeinit(ctx) {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, 300, 300);
    ctx.save();
    // ctx.translate(150, 150)
    ctx.fillStyle = "#fff";
  }

  function randomNum() {
    return Math.round(Math.random() * 30);
  }

  Snake();

  ///////////////////////////////////////////////////////////////////////////
  let circlecanvas = document.querySelector("#circle");
  var mouseX, mouseY;

  circlecanvas.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function randomColor() {
    let colors = ["#272F32", "#9DBDC6", "#FF3D2E", "#DAEAEF"];
    let index = Math.round(Math.random() * 3);
    return colors[index];
  }

  function randomRadius() {
    return Math.random() * 5;
  }

  function circle() {
    this.MAXNUM = 600;
    this.circles = [];
    this.width = 600;
    this.height = 300;
  }

  circle.prototype.init = function() {
    let max = this.MAXNUM;
    for (let i = 0; i < max; i++) {
      let t = {
        radius: randomRadius(),
        color: randomColor(),
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        dir: Math.round(Math.random() * 3),
        originalRadius: 0
      };
      t.originalRadius = t.radius;
      this.circles.push(t);
    }
  };

  circle.prototype.largen = function() {
    let circles = this.circles;
    let distanceX, distanceY;
    let mX = mouseX;
    let mY = mouseY;
    let distance = 35;
    let max = 35;

    circles.forEach(function(circle) {
      distanceX = circle.x - mX;
      distanceY = circle.y - mY;
      if (
        distanceX < distance &&
        distanceX > -distance &&
        distanceY < distance &&
        distanceY > -distance &&
        circle.radius < max
      ) {
        circle.radius += 2;
      } else if (
        (distanceX >= distance || distanceX <= -distance) &&
        (distanceY >= distance || distanceY <= -distance) &&
        circle.radius > circle.originalRadius
      ) {
        if (circle.radius > 2) {
          circle.radius -= 2;
        }
      }
    });
  };

  circle.prototype.update = function() {
    let circles = this.circles;
    let that = this;
    circles.forEach(function(item) {
      switch (item.dir) {
        //左上
        case 0:
          item.x--;
          item.y--;
          if (item.x - item.radius <= 0) {
            item.dir = 1;
          }
          if (item.y - item.radius <= 0) {
            item.dir = 3;
          }
          break;
        //右下
        case 2:
          item.x++;
          item.y++;
          if (item.x + item.radius >= that.width) {
            item.dir = 3;
          }
          if (item.y + item.radius >= that.height) {
            item.dir = 1;
          }
          break;
        //左下
        case 3:
          item.x--;
          item.y++;
          if (item.x - item.radius <= 0) {
            item.dir = 2;
          }
          if (item.y + item.radius >= that.height) {
            item.dir = 0;
          }
          break;
        //右上
        case 1:
          item.x++;
          item.y--;
          if (item.x + item.radius >= that.width) {
            item.dir = 0;
          }
          if (item.y - item.radius <= 0) {
            item.dir = 2;
          }
          break;
      }
    });
  };

  let circleview = new circle();
  circleview.init();

  function Circle() {
    let ctx = circlecanvas.getContext("2d");

    ctx.clearRect(0, 0, circleview.width, circleview.height);
    let circles = circleview.circles;
    circles.forEach(function(item) {
      ctx.beginPath();
      ctx.fillStyle = item.color;
      ctx.arc(item.x, item.y, item.radius, 2 * Math.PI, 0);
      ctx.fill();
      ctx.closePath();
    });
    circleview.largen();
    circleview.update();
    window.requestAnimationFrame(Circle);
  }

  console.log(circleview.circles);
  Circle();
};
