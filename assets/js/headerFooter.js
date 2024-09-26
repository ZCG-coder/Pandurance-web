import $ from "jquery";

export function makeHeader() {
  $(".navbar").html(`
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Pandurance</a
        ><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
          <span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#"></a></li>
            <li class="nav-item">
              <a class="nav-link active" href="blog.html">Blog</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="dropdown-toggle nav-link"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                id="nav-internals-dropdown"
                href="#"
                >Internal</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="https://prj.pandurance.tech">Project Tracker</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="about_site.html">About this website</a>
            </li>
          </ul>
        </div>
      </div>
  `);
}

export function makeFooter() {
  let footerHtml = `
      <div class="container text-muted py-4 py-lg-5">
        <p>Made using&nbsp;<a href="https://bootstrapstudio.io">Bootstrap Studio</a></p>

        <div class="container">
          <div class="row">
            <div class="col">
              <a href="https://instagram.com/panduranceracing"><i class="bi bi-instagram"></i></a>
            </div>
            <div class="col">
              <a href="https://github.com/pandurance"><i class="bi bi-github"></i></a>
            </div>
            <div class="col">
              <a href="mailto:info@pandurance.tech"><i class="bi bi-envelope-at-fill"></i></a>
            </div>
            <div class="col">
              <a href="https://wa.me/85254029725"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <p class="mb-0">Copyright &copy; 2024 Pandurance Racing</p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-baseline">
            <p>Supported by</p>
          </div>
        </div>
        <div class="row">`;

  for (const obj of global.sponsorsList) {
    footerHtml += `
          <div class="col-md-3 align-self-center">
            <a href="${obj.url}"><img src="${obj.imgName}" style="max-height: 4em" /></a>
          </div>
      `;
  }
  footerHtml += `
        </div>
      </div>`;

  $(".footer").html(footerHtml);
}
