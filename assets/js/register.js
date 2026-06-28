const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  Swal.fire({
    title: "Mendaftarkan akun...",
    text: "Mohon tunggu sebentar",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  setTimeout(() => {
    Swal.fire({
      icon: "success",
      title: "Registrasi Berhasil!",
      text: "Silakan login menggunakan akun Anda.",
    }).then(() => {
      window.location.href = "login.html";
    });
  }, 2000);
});
