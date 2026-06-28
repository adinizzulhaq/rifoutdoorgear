const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  Swal.fire({
    title: "Memverifikasi akun...",
    text: "Mohon tunggu",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  setTimeout(() => {
    Swal.fire({
      icon: "success",
      title: "Selamat Datang!",
      text: "Login berhasil.",
    }).then(() => {
      window.location.href = "index.html";
    });
  }, 2000);
});
